/* global document */

import nhsdEvent from './helpers/nhsd-event';

export default {
    ...nhsdEvent(document),
    event: nhsdEvent,
};
