/* global document */
import nhsd from '@/nhsd';

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
    const menuItems = Array.from(this.dropdownContainer.querySelectorAll('a, button'));
    nhsd(menuItems).on('click.dropdown', (e) => nhsd(this.componentEl).trigger('dropdown-selection', e.target));
    nhsd(this.componentEl).on('dropdown-selection.dropdown', (e, selected) => {
      const searchInput = this.componentEl.querySelector('.nhsd-o-dropdown__input .nhsd-m-search-bar input');
      if (!searchInput) return;
      searchInput.value = selected.innerText;
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
        if (this.dropdownInput.contains(e.target)) return;
        nhsd(this.componentEl).trigger('dropdown-close');
      });
    }

    nhsd(this.componentEl).on('dropdown-set-items.dropdown', (e) => {
      if (e.detail) this.#setItems(e.detail);
    });
  }

  #setItems(items) {
    if (!this.dropdownContainer) return;

    const dropdownList = this.dropdownContainer.querySelector('ul');
    dropdownList.innerHTML = '';
    if (!dropdownList) return;

    items.forEach((item) => {
      let itemEl;
      if (item.href) {
        itemEl = document.createElement('a');
        itemEl.setAttribute('href', item.href);
      } else {
        itemEl = document.createElement('button');
      }

      itemEl.setAttribute('role', 'option');

      if (item.onClick) {
        nhsd(itemEl).on('click.dropdown', item.onClick);
      }

      if (item.text) {
        itemEl.innerHTML = item.text;
      }

      if (item.data) {
        const dataKeys = Object.keys(item.data);
        dataKeys.forEach((dataKey) => {
          itemEl.dataset[dataKey] = item.data[dataKey];
        });
      }

      const itemsListItem = document.createElement('li');
      itemsListItem.appendChild(itemEl);
      dropdownList.appendChild(itemsListItem);
    });

    this.#bindSelectionEvent();
  }
}
