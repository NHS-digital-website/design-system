export default class NHSDFilterMenu {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    for (let i = 0; i < this.hostEl.children.length; i += 1) {
      this.hostEl.children[i].querySelector('.nhsd-m-filter-menu-section__heading-text').addEventListener('click', function clickEvent() {
        this.parentElement.querySelector('#icon').classList.toggle('active');

        const panel = this.parentElement.querySelector('.nhsd-m-filter-menu-section__accordion-panel');

        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }
  }
}
