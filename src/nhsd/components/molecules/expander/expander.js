export default class NHSDExpander {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    const headingContainer = this.hostEl.querySelector('.nhsd-m-expander__heading-container');
    const icon = headingContainer.querySelector('.nhsd-m-expander__icon');
    const contentContainer = this.hostEl.querySelector('.nhsd-m-expander__content-container');

    headingContainer.addEventListener('click', () => {
      icon.classList.toggle('active');

      if (contentContainer.style.display === 'block') {
        contentContainer.style.display = 'none';
        headingContainer.setAttribute('aria-expanded', 'false');
      } else {
        contentContainer.style.display = 'block';
        headingContainer.setAttribute('aria-expanded', 'true');
      }
    });
  }
}
