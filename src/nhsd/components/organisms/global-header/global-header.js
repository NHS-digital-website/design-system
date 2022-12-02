/* global document */

import nhsd from '@/nhsd';
import scrollLock from '@/helpers/scroll-lock';
import FocusTrapper from '@/helpers/FocusTrapper';

export default class NHSDGlobalHeader {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.html = document.querySelector('html');
    this.logoEl = this.hostEl.querySelector('#nhsd-global-header__logo');
    this.menuBarEl = this.hostEl.querySelector('#nhsd-global-header__menu');
    this.searchInput = this.hostEl.querySelector('#query');
    this.megaMenu = this.hostEl.querySelector('.nhsd-o-global-header__mega-menu');
    this.menuBarActive = false;

    this.initMenuBar();
    this.initSearchBar();

    if (this.megaMenu) {
      this.focusTrapper = new FocusTrapper(this.megaMenu);
      this.#initMegaMenu();
    }
  }

  #openMegaMenu(menuId) {
    this.#closeMegaMenu();
    this.closeMenuBar();
    const megaMenu = this.megaMenu.querySelector(`#${menuId}`);
    if (megaMenu) {
      megaMenu.classList.add('nhsd-o-global-header__mega-menu-content--active');
    }
    const megaMenuButton = document.querySelector(`.nhsd-a-menu-item[data-mega-menu="${menuId}"]`);
    if (megaMenuButton) {
      megaMenuButton.classList.add('nhsd-a-menu-item--active');
      megaMenuButton.setAttribute('aria-expanded', true);
    }
    this.hostEl.classList.add('nhsd-o-global-header--mega-menu-active');
    scrollLock(true);
    this.focusTrapper.focus(this.megaMenu);
  }

  #closeMegaMenu() {
    if (!this.megaMenu) return;

    this.hostEl.classList.remove('nhsd-o-global-header--mega-menu-active');
    const megaMenuButtons = document.querySelectorAll('.nhsd-a-menu-item');
    if (megaMenuButtons) {
      megaMenuButtons.forEach((megaMenuButton) => megaMenuButton.classList.remove('nhsd-a-menu-item--active'));
    }

    scrollLock(false);

    const megaMenuContentEls = this.megaMenu.querySelectorAll('.nhsd-o-global-header__mega-menu-content--active');
    if (!megaMenuContentEls) return;

    megaMenuContentEls.forEach((megaMenuContentEl) => megaMenuContentEl.classList.remove('nhsd-o-global-header__mega-menu-content--active'));

    if (megaMenuContentEls.length > 0 && megaMenuContentEls[0].id) {
      const menuId = megaMenuContentEls[0].id;

      const megaMenuButton = document.querySelector(`.nhsd-a-menu-item[data-mega-menu="${menuId}"]`);
      if (megaMenuButton) {
        megaMenuButton.setAttribute('aria-expanded', false);
        megaMenuButton.focus();
      }
    }
  }

  #initMegaMenu() {
    const megaMenuButtons = document.querySelectorAll('[data-mega-menu]');
    megaMenuButtons.forEach((megaMenuButton) => {
      nhsd(megaMenuButton).on('click', () => {
        const megaMenuId = megaMenuButton.dataset.megaMenu;
        nhsd(this.hostEl).trigger('megamenu-toggle', megaMenuId);
        return false;
      });
    });

    const megaMenuCloseButtons = document.querySelectorAll('[data-mega-menu-close]');
    megaMenuCloseButtons.forEach((megaMenuButton) => {
      nhsd(megaMenuButton).on('click', () => {
        nhsd(this.hostEl).trigger('megamenu-close');
        return false;
      });
    });

    nhsd(this.hostEl).on('megamenu-toggle', (e) => {
      if (this.hostEl.classList.contains('nhsd-o-global-header--mega-menu-active')) {
        this.#closeMegaMenu();
      } else {
        this.#openMegaMenu(e.detail);
      }
    });

    nhsd.on('keyup.global-header', (e) => {
      if (e.key === 'Escape') {
          nhsd(this.hostEl).trigger('megamenu-close');
      }
    });

    nhsd(this.hostEl).on('megamenu-open', (e) => this.#openMegaMenu(e.detail));

    nhsd(this.hostEl).on('megamenu-close', () => this.#closeMegaMenu());
  }

  initMenuBar() {
    this.menuButtonEl = this.hostEl.querySelector('#nhsd-global-header__menu-button');
    if (!this.menuButtonEl) return;
    nhsd(this.menuButtonEl).on('click', () => {
      if (!this.menuBarActive) {
        this.openMenuBar();
      } else {
        this.closeMenuBar();
      }

      if (this.searchBarActive) {
        this.closeSearchBar();
      }

      return false;
    });

    this.menuCloseButtonEl = this.hostEl.querySelector('#nhsd-global-header__menu-close-button');
    nhsd(this.menuCloseButtonEl).on('click', () => {
      this.closeMenuBar();
      return false;
    });

    const openMenuButtons = this.hostEl.querySelectorAll('[data-menu-open]');
    nhsd(Array.from(openMenuButtons)).on('click', () => {
      this.openMenuBar();
      return false;
    });
  }

  initSearchBar() {
    this.searchButtonEl = this.hostEl.querySelector('#nhsd-global-header__search-button');
    if (!this.searchButtonEl) return;

    nhsd(this.searchButtonEl).on('click', () => {
      if (!this.searchBarActive) {
        this.openSearchBar();
      } else {
        this.closeSearchBar();
      }

      if (this.menuBarActive) {
        this.closeMenuBar();
      }

      return false;
    });

    this.searchCloseButtonEl = this.hostEl.querySelector('#nhsd-global-header__search-close-button');
    nhsd(this.searchCloseButtonEl).on('click', () => {
      this.closeSearchBar();
      return false;
    });
  }

  openMenuBar() {
    this.#closeMegaMenu();
    this.hostEl.classList.add('js-menu-active');
    this.menuBarActive = true;
    this.menuButtonEl.setAttribute('aria-expanded', true);

    this.setTabIndexes();
    this.setDocumentScrolling();
  }

  closeMenuBar() {
    this.hostEl.classList.remove('js-menu-active');
    this.menuBarActive = false;
    this.menuButtonEl.setAttribute('aria-expanded', false);

    this.setTabIndexes();
    this.setDocumentScrolling();
  }

  openSearchBar() {
    this.hostEl.classList.add('js-search-active');
    this.searchButtonEl.blur();
    if (this.searchInput) this.searchInput.focus();
    this.searchButtonEl.setAttribute('aria-expanded', true);
    this.searchBarActive = true;

    this.setDocumentScrolling();
    this.#closeMegaMenu();
  }

  closeSearchBar() {
    this.hostEl.classList.remove('js-search-active');
    this.searchButtonEl.blur();
    this.searchButtonEl.setAttribute('aria-expanded', false);
    this.searchBarActive = false;

    this.setDocumentScrolling();
  }

  setDocumentScrolling() {
    if (this.hostEl.classList.contains('js-menu-active') || this.hostEl.classList.contains('js-search-active')) {
      scrollLock(true);
    } else {
      scrollLock(false);
    }
  }

  setTabIndexes() {
    if (!this.menuBarEl) return;
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
