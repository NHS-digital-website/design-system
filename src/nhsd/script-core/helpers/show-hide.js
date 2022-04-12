/* global document */

import nhsd from '@/nhsd';

function ariaUpdate(targetEl) {
  const toggleId = targetEl.getAttribute('aria-controls');
  const toggleEl = document.querySelector(`#${toggleId}`);
  if (!toggleEl) return;
  if (toggleEl.classList.contains('nhsd-!t-display-show') || !toggleEl.classList.contains('nhsd-!t-display-hide')) {
    targetEl.setAttribute('aria-expanded', 'true');
  } else {
    targetEl.setAttribute('aria-expanded', 'false');
  }
}

export default function () {
  nhsd('[data-hide]').on('click', (e) => {
    const targetEl = e.currentTarget;
    const hideIds = targetEl.dataset.hide;
    if (!hideIds) return;

    const hideIdArr = hideIds.split(' ');
    hideIdArr.forEach((elementId) => {
      const hideElement = document.querySelector(`#${elementId}`);
      if (!hideElement) return;
      hideElement.classList.add('nhsd-!t-display-hide');
      hideElement.classList.remove('nhsd-!t-display-show');
    });

    ariaUpdate(targetEl);
  });

  nhsd('[data-show]').on('click', (e) => {
    const targetEl = e.currentTarget;
    const showIds = targetEl.dataset.show;
    if (!showIds) return;

    const showIdArr = showIds.split(' ');
    showIdArr.forEach((elementId) => {
      const showElement = document.querySelector(`#${elementId}`);
      if (!showElement) return;
      showElement.classList.add('nhsd-!t-display-show');
      showElement.classList.remove('nhsd-!t-display-hide');
    });

    ariaUpdate(targetEl);
  });

  nhsd('[data-toggle]').on('click', (e) => {
    const targetEl = e.currentTarget;
    const toggleIds = targetEl.dataset.toggle;
    if (!toggleIds) return;

    const toggleIdArr = toggleIds.split(' ');
    toggleIdArr.forEach((elementId) => {
      const toggleElement = document.querySelector(`#${elementId}`);
      if (!toggleElement) return;

      if (toggleElement.classList.contains('nhsd-!t-display-show') || !toggleElement.classList.contains('nhsd-!t-display-hide')) {
        toggleElement.classList.remove('nhsd-!t-display-show');
        toggleElement.classList.add('nhsd-!t-display-hide');
      } else {
        toggleElement.classList.add('nhsd-!t-display-show');
        toggleElement.classList.remove('nhsd-!t-display-hide');
      }
    });

    ariaUpdate(targetEl);
  });
}
