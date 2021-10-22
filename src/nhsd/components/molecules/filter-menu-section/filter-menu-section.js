import nhsd from '@/nhsd';

export default class NHSDFilterMenu {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    const menuButton = this.hostEl.querySelector('.nhsd-m-filter-menu-section__menu-button');

    menuButton.addEventListener('click', () => {
      this.hostEl.classList.toggle('nhsd-m-filter-menu-section--active');
      const isActive = this.hostEl.classList.contains('nhsd-m-filter-menu-section--active');
      menuButton.setAttribute('aria-expanded', isActive);
    });

    nhsd(this.hostEl).on('filter-menu-open', () => {
      this.hostEl.classList.add('nhsd-m-filter-menu-section--active');
      menuButton.setAttribute('aria-expanded', true);
    });

    nhsd(this.hostEl).on('filter-menu-close', () => {
      this.hostEl.classList.remove('nhsd-m-filter-menu-section--active');
      menuButton.setAttribute('aria-expanded', false);
    });
  }
}
