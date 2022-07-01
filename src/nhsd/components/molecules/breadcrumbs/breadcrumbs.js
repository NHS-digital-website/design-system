/* global window */
import nhsd from '@/nhsd';

export default class NHSDBreadcrumbs {
  breadcrumbs = [];

  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    this.breadcrumbs = Array.from(this.hostEl.querySelectorAll('.nhsd-m-breadcrumbs__item'));
    if (this.breadcrumbs.length <= 3) return;

    this.collapseBreadcrumbs();

    nhsd(window).on('resize.breadcrumbs', () => this.collapseBreadcrumbs());
  }

  isWrapping() {
    const firstBreadcrumbsTop = this.breadcrumbs[0].getBoundingClientRect().top;
    const lastBreadcrumbsTop = this.breadcrumbs[this.breadcrumbs.length - 1].getBoundingClientRect().top;

    // If the top of the first breadcrumb is above the last there is wrapping
    return firstBreadcrumbsTop < lastBreadcrumbsTop;
  }

  collapseBreadcrumbs() {
    this.reset();

    if (!this.isWrapping()) return;

    // Add ellipsis button
    this.showEllipsis();

    // Loop over breadcrumbs collapsing all but first and last two items until there's no wrapping
    for (let i = 1; i < this.breadcrumbs.length - 2; i++) {
      this.breadcrumbs[i].classList.add('nhsd-!t-display-hide');
      if (!this.isWrapping()) return;
    }
  }

  showEllipsis() {
    const ellipsisHtml = `<li class="nhsd-m-breadcrumbs__item nhsd-m-breadcrumbs__item--button">
          <span class="nhsd-m-breadcrumbs__ellipses">
            <span class="nhsd-a-icon nhsd-a-icon--size-xs nhsd-a-icon--col-blue">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="100%" height="100%">
                <path d="M3.2,10.2C2,10.2,1,9.2,1,8s1-2.2,2.2-2.2s2.2,1,2.2,2.2S4.4,10.2,3.2,10.2z M8,10.2c-1.2,0-2.2-1-2.2-2.2 s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.2,10.2,8,10.2z M12.8,10.2c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2S15,6.8,15,8S14,10.2,12.8,10.2z"></path>
              </svg>
            </span>
          </span>
        <span class="nhsd-a-icon nhsd-a-icon--size-xxs nhsd-a-icon--col-dark-grey">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="100%" height="100%">
            <path d="M12,8l-6.5,7L4,13.5L9.2,8L4,2.5L5.5,1L12,8z"></path>
          </svg>
        </span>
      </li>`;
    this.breadcrumbs[0].insertAdjacentHTML('afterend', ellipsisHtml);

    // Add click event
    const breadcrumbsIcon = this.hostEl.querySelector('.nhsd-m-breadcrumbs__item--button');
    nhsd(breadcrumbsIcon).on('click.nhsd-tabs', () => this.reset());
  }

  reset() {
    this.breadcrumbs.forEach((item) => item.classList.remove('nhsd-!t-display-hide'));
    const ellipsesItem = this.hostEl.querySelector('.nhsd-m-breadcrumbs__ellipses');
    if (ellipsesItem) ellipsesItem.parentElement.remove();
  }
}
