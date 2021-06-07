/* global document window */
import init from '@/init';
import nhsd from '@/nhsd';

init();
window.addEventListener('load', () => {
  document.querySelector('html').classList.remove('nhsd-no-js');
});

window.nhsd = Object.assign(nhsd, init);
