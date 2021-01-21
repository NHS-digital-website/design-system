/* global document window */

// Singleton
let instance = null;

export default class NHSDGlobalHeader {
  constructor() {
    if (!instance) {
      this.hostEl = document.querySelector('#nhsd-global-header');
      if (this.hostEl) {
        instance = this;
        this.init();
      }
      return null;
    }
    return instance;
  }

  init() {
    this.html = document.querySelector('html');
    this.body = document.body;
    this.logoEl = this.hostEl.querySelector('#nhsd-global-header__logo');
    this.menuBarEl = this.hostEl.querySelector('#nhsd-global-header__menu');
    this.searchInput = this.hostEl.querySelector('#query');

    this.cachedProps = {
      html: {
        overflow: this.html.style.overflow,
        height: this.html.style.height,
      },
      body: {
        overflow: this.html.style.overflow,
        height: this.html.style.height,
      },
    };

    this.initMenuBar();
    this.initSearchBar();

    // Handle resize event
    window.addEventListener('resize', () => {
      // Close the menu on desktops
      if (window.innerWidth >= 1240 && this.hostEl.classList.contains('js-menu-active')) {
        this.hostEl.classList.remove('js-menu-active');
      }
    });
  }

  initMenuBar() {
    this.menuButtonEl = this.hostEl.querySelector('#nhsd-global-header__menu-button');
    this.menuButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!this.menuBarActive) {
        this.openMenuBar();
      } else {
        this.closeMenuBar();
      }

      if (this.searchBarActive) {
        this.closeSearchBar();
      }

      this.setDocumentScrolling();
    });

    this.menuCloseButtonEl = this.hostEl.querySelector('#nhsd-global-header__menu-close-button');
    this.menuCloseButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.closeMenuBar();
      this.setDocumentScrolling();
    });
  }

  initSearchBar() {
    this.searchButtonEl = this.hostEl.querySelector('#nhsd-global-header__search-button');
    this.searchButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!this.searchBarActive) {
        this.openSearchBar();
      } else {
        this.closeSearchBar();
      }

      if (this.menuBarActive) {
        this.closeMenuBar();
      }

      this.setDocumentScrolling();
    });

    this.searchCloseButtonEl = this.hostEl.querySelector('#nhsd-global-header__search-close-button');
    this.searchCloseButtonEl.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.closeSearchBar();
      this.setDocumentScrolling();
    });
  }

  openMenuBar() {
    this.hostEl.classList.add('js-menu-active');
    this.menuButtonEl.classList.add('js-active');
    this.menuBarActive = true;
    this.menuButtonEl.setAttribute('aria-expanded', true);

    this.setTabIndexes();
  }

  closeMenuBar() {
    this.hostEl.classList.remove('js-menu-active');
    this.menuButtonEl.classList.remove('js-active');
    this.menuBarActive = false;
    this.menuButtonEl.setAttribute('aria-expanded', false);

    this.setTabIndexes();
  }

  openSearchBar() {
    this.hostEl.classList.add('js-search-active');
    this.searchButtonEl.classList.add('js-active');
    this.searchButtonEl.blur();
    this.searchInput.focus();
    this.searchButtonEl.setAttribute('aria-expanded', true);
    this.searchBarActive = true;
  }

  closeSearchBar() {
    this.hostEl.classList.remove('js-search-active');
    this.searchButtonEl.classList.remove('js-active');
    this.searchButtonEl.blur();
    this.searchButtonEl.setAttribute('aria-expanded', false);
    this.searchBarActive = false;
  }

  setDocumentScrolling() {
    if (this.hostEl.classList.contains('js-menu-active') || this.hostEl.classList.contains('js-search-active')) {
      this.html.style.overflow = 'hidden';
      this.body.style.overflow = 'hidden';
      this.html.style.height = '100%';
      this.body.style.height = '100%';
    } else {
      this.html.style.overflow = this.cachedProps.html.overflow
        ? this.cachedProps.html.overflow : null;
      this.html.style.height = this.cachedProps.html.height
        ? this.cachedProps.html.height : null;
        this.body.style.overflow = this.cachedProps.body.overflow
        ? this.cachedProps.body.overflow : null;
      this.body.style.height = this.cachedProps.body.height
        ? this.cachedProps.body.height : null;
    }
  }

  setTabIndexes() {
    const menuItems = Array.from(this.menuBarEl.querySelectorAll('.nhsd-a-menu-item'));

    if (this.menuBarActive) {
      let tabIndex = 0;
      this.logoEl.setAttribute('tabindex', tabIndex += 1);
      this.searchButtonEl.setAttribute('tabindex', tabIndex += 1);
      this.menuButtonEl.setAttribute('tabindex', tabIndex += 1);
      this.menuCloseButtonEl.setAttribute('tabindex', tabIndex += 1);

      menuItems.forEach((el, index) => {
        el.setAttribute('tabindex', tabIndex += (index + 1));
      });
    } else {
      this.logoEl.removeAttribute('tabindex');
      this.searchButtonEl.removeAttribute('tabindex');
      this.menuButtonEl.removeAttribute('tabindex');
      this.menuCloseButtonEl.removeAttribute('tabindex');

      menuItems.forEach((el) => {
        el.removeAttribute('tabindex');
      });
    }
  }
}
