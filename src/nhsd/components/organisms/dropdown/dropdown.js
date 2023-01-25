/* global document, Element */
import nhsd from '@/nhsd';

function createCheckboxItem(item) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('nhsd-a-checkbox');
  itemEl.classList.add('nhsd-a-checkbox--small');
  itemEl.innerHTML = `<label>
    <input name="${item.name}" type="checkbox" ${item.checked ? 'checked' : ''}>
    <div class="nhsd-a-checkbox__label">${item.text}</div>
    <div class="checkmark"></div>
  </label>`;

  const input = itemEl.querySelector('input');

  if (item.onClick) {
    nhsd(input).on('click.dropdown', item.onClick);
  }

  if (item.data) {
    const dataKeys = Object.keys(item.data);
    dataKeys.forEach((dataKey) => {
      input.dataset[dataKey] = item.data[dataKey];
    });
  }

  return itemEl;
}

function createButtonItem(item) {
  let itemEl;
  if (item.href) {
    itemEl = document.createElement('a');
  } else {
    itemEl = document.createElement('button');
  }

  itemEl.setAttribute('role', 'option');

  if (item.text) {
    itemEl.innerHTML = item.text;
  }

  if (item.onClick) {
    nhsd(itemEl).on('click.dropdown', item.onClick);
  }

  if (item.data) {
    const dataKeys = Object.keys(item.data);
    dataKeys.forEach((dataKey) => {
      itemEl.dataset[dataKey] = item.data[dataKey];
    });
  }

  return itemEl;
}

export default class NHSDDropDown {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.componentEl = componentEl;

    this.componentId = null;
    if (this.componentEl.id) {
      this.componentId = this.componentEl.id;
    }

    this.dropdownContainer = null;
    const dropdownContainer = this.componentEl.querySelector('.nhsd-o-dropdown__dropdown');
    if (dropdownContainer) {
      this.dropdownContainer = dropdownContainer;
    }

    this.dropdownInput = null;
    const dropdownInput = this.componentEl.querySelector('.nhsd-o-dropdown__input button, .nhsd-o-dropdown__input input');
    if (dropdownInput) {
      this.dropdownInput = dropdownInput;
    }

    this.#bindEvents();
  }

  #setAriaExpanded() {
    if (this.dropdownInput) this.dropdownInput.setAttribute('aria-expanded', this.componentEl.classList.contains('nhsd-o-dropdown--open'));
  }

  #bindSelectionEvent() {
    if (!this.dropdownContainer) return;
    const menuItems = Array.from(this.dropdownContainer.querySelectorAll('a, button, input'));
    nhsd(menuItems).unbind('click.dropdown').on('click.dropdown', (e) => nhsd(this.componentEl).trigger('dropdown-selection', e.currentTarget));
    nhsd(this.componentEl).unbind('dropdown-selection.dropdown').on('dropdown-selection.dropdown', (e, selected) => {
      if (selected.nodeName === 'INPUT') return;
      const searchInput = this.componentEl.querySelector('.nhsd-o-dropdown__input .nhsd-m-search-bar input');
      if (!searchInput) return;
      searchInput.value = selected.innerText;
      if (this.componentEl.getAttribute('data-dropdown-auto-close') !== 'false') {
        nhsd(this.componentEl).trigger('dropdown-close');
      }
    });
  }

  #bindEvents() {
    nhsd(this.componentEl).on('dropdown-open', () => {
      this.componentEl.classList.add('nhsd-o-dropdown--open');
      this.#setAriaExpanded();
    });
    nhsd(this.componentEl).on('dropdown-close', () => {
      this.componentEl.classList.remove('nhsd-o-dropdown--open');
      this.#setAriaExpanded();
    });
    nhsd(this.componentEl).on('dropdown-toggle', () => {
      this.componentEl.classList.toggle('nhsd-o-dropdown--open');
      this.#setAriaExpanded();
    });

    let openButtons = Array.from(document.querySelectorAll(`[data-dropdown-open="${this.componentId}"]`));
    openButtons = openButtons.concat(Array.from(this.componentEl.querySelectorAll('[data-dropdown-open]')));
    nhsd(openButtons).on('click.dropdown', () => nhsd(this.componentEl).trigger('dropdown-open'));

    let closeButtons = Array.from(document.querySelectorAll(`[data-dropdown-close="${this.componentId}"]`));
    closeButtons = closeButtons.concat(Array.from(this.componentEl.querySelectorAll('[data-dropdown-close]')));
    nhsd(closeButtons).on('click.dropdown', () => nhsd(this.componentEl).trigger('dropdown-close'));

    let toggleButtons = Array.from(document.querySelectorAll(`[data-dropdown-toggle="${this.componentId}"]`));
    toggleButtons = toggleButtons.concat(Array.from(this.componentEl.querySelectorAll('[data-dropdown-toggle]')));
    nhsd(toggleButtons).on('click.dropdown', () => nhsd(this.componentEl).trigger('dropdown-toggle'));

    this.#bindSelectionEvent();

    if (this.componentEl.getAttribute('data-dropdown-auto-close') !== 'false') {
      nhsd(document).on('click.dropdown', (e) => {
        if (this.componentEl.contains(e.target)) return;
        nhsd(this.componentEl).trigger('dropdown-close');
      });
    }

    nhsd(this.componentEl).on('dropdown-set-items.dropdown', (e) => {
      if (e.detail) this.#setItems(e.detail);
    });

    nhsd(this.componentEl).on('dropdown-set-content.dropdown', (e) => {
      if (e.detail) this.#setContent(e.detail);
    });
  }

  #setContent(content) {
    if (!this.dropdownContainer) return;

    if (typeof content === 'string') {
      this.dropdownContainer.innerHTML = content;
    } else if (content instanceof Element) {
      this.dropdownContainer.innerHTML = '';
      this.dropdownContainer.appendChild(content);
    }

    this.#bindSelectionEvent();
  }

  #setItems(items) {
    if (!this.dropdownContainer) return;

    const dropdownList = document.createElement('ul');

    items.forEach((item) => {
      let itemEl;
      if (item.checkbox) {
        itemEl = createCheckboxItem(item);
      } else {
        itemEl = createButtonItem(item);
      }

      const itemsListItem = document.createElement('li');
      itemsListItem.appendChild(itemEl);
      dropdownList.appendChild(itemsListItem);
    });

    this.dropdownContainer.innerHTML = '';
    this.dropdownContainer.appendChild(dropdownList);

    this.#bindSelectionEvent();
  }
}
