/* global window */
import nhsd from '@/nhsd';

export default class NHSDBreadcrumbs {
  breadcrumbs = []

  firstCrumbText = '';

  breadcrumbsLength = 0

  href = '';

  constructor(componentEl) {
    if (!componentEl) return null;
    this.hostEl = componentEl;
    this.init();
  }

  init() {
    this.breadcrumbs = this.hostEl.querySelectorAll('.nhsd-m-breadcrumbs__item');
    if (this.breadcrumbs.length > 3) {
      this.breadcrumbsText = Array.from(this.breadcrumbs)[1].innerText;
      this.href = this.breadcrumbs[1].children[0].href;
      this.resizeBreadCrumbs();
      nhsd.event(window).on('resize.breadcrumbs', () => {
        this.resizeBreadCrumbs();
        this.addClickEvent();
      });
    }
  }

  resizeBreadCrumbs() {
    const breadcrumbsTop = this.breadcrumbs[0].getBoundingClientRect().top;
    this.reset();
    for (let i = 1; i < this.breadcrumbs.length - 2; i++) {
      if (breadcrumbsTop
        !== this.breadcrumbs[this.breadcrumbs.length - 1].getBoundingClientRect().top) {
          if (i === 1) {
            this.replaceTextBreadCrumb(i);
           } else {
             this.breadcrumbs[i].style.display = 'none';
         }
      }
    }
  }

  replaceTextBreadCrumb(i) {
    if (!this.hostEl.querySelector('.nhsd-m-breadcrumbs__item--button')) {
      this.breadcrumbs[i].innerHTML = `<li class="nhsd-m-breadcrumbs__item nhsd-m-breadcrumbs__item--button">
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
    }
  }

  reset() {
    this.breadcrumbs.forEach((item) => { item.style.display = 'inline-block'; });
    this.breadcrumbs[1].innerHTML = `<a class="nhsd-a-link nhsd-a-link--col-dark-grey" href="${this.href}">${this.breadcrumbsText}
      <span class="nhsd-t-sr-only"></span>
    </a>
    <span class="nhsd-a-icon nhsd-a-icon--size-xxs nhsd-a-icon--col-dark-grey">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="100%" height="100%">
        <path d="M12,8l-6.5,7L4,13.5L9.2,8L4,2.5L5.5,1L12,8z"></path>
      </svg>
    </span>`;
  }

  addClickEvent() {
    const breadcrumbsIcon = this.hostEl.querySelector('.nhsd-m-breadcrumbs__item--button');
    if (breadcrumbsIcon) {
      nhsd.event(breadcrumbsIcon).on('click.nhsd-tabs', () => this.reset());
    }
  }
}
