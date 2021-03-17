/* global document window */
import init from '@/init';

init();
window.addEventListener('load', () => {
  document.querySelector('html').classList.remove('nhsd-no-js');
});
