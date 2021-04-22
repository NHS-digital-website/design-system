export default class NHSDNotificationBanner {
  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    const closeIconDiv = this.hostEl.querySelector('.nhsd-m-notification-banner__right-col');

    if (!this.hostEl.classList.contains('nhsd-m-notification-banner--irremovable')) {
      closeIconDiv.style.display = 'block';
    }

    closeIconDiv.addEventListener('click', () => this.fadeOutEffect(this.hostEl));
  }

  // eslint-disable-next-line class-methods-use-this
  fadeOutEffect(fadeTarget) {
    fadeTarget.classList.add('nhsd-m-notification-banner--fade-out');
    setTimeout(() => {
      fadeTarget.classList.remove('nhsd-m-notification-banner--fade-out');
      fadeTarget.classList.add('nhsd-m-notification-banner--hidden');
    }, 500);
  }
}
