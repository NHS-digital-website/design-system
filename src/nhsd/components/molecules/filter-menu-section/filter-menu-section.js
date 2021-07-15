export default class NHSDFilterMenu {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    for (let i = 0; i < this.hostEl.children.length; i += 1) {
      this.hostEl.children[i].querySelector('.nhsd-m-filter-menu-section__heading-text').addEventListener('click', (event) => {
        this.hostEl.classList.toggle('nhsd-m-filter-menu-section--active');
        const isActive = this.hostEl.classList.contains('nhsd-m-filter-menu-section--active');
        event.target.setAttribute('aria-expanded', isActive);
      });
    }
  }
}
