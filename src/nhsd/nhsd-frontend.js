/* global document window */

import NHSDGlobalHeader from './components/organisms/global-header/global-header';

// Singleton
let instance = null;

export default class NHSD {
  globalHeader = null;

  constructor() {
    if (!instance) {
      instance = this;
      this.init();
    }
    return instance;
  }

  init() {
    window.addEventListener('load', () => {
      document.querySelector('html').classList.remove('nhsd-no-js');

      this.globalHeader = new NHSDGlobalHeader();
    });
  }
}

/* eslint-disable no-unused-vars */
// Self instantiating master class
const nhsd = new NHSD();
/* eslint-enable no-unused-vars */
