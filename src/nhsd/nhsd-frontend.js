/* global document window */
import init from '@/init';
import nhsd from '@/nhsd';

function load() {
  init();

  document.documentElement.classList.remove('nhsd-no-js');
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  load();
} else {
  document.addEventListener('DOMContentLoaded', load, false);
}

window.nhsd = Object.assign(nhsd, { init });
