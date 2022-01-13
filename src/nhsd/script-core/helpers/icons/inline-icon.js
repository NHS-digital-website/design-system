const hexIcon = require('./hexagonal-icon');

let icons;
try {
    icons = SVG_ICONS || {};
} catch (e) {
    icons = {};
}
const inlineIcon = function (id, nested = false) {
    if (nested) return hexIcon(icons[id]);
    return icons[id];
};

inlineIcon.icons = icons;

module.exports = inlineIcon;
