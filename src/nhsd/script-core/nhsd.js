/* global document */

import nhsdEvent from './helpers/nhsd-event';

const nhsd = Object.assign(nhsdEvent, nhsdEvent(document));

export default nhsd;
