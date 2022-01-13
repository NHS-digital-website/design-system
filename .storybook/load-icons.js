const path = require('path');
const fs = require('fs');

const svgs = {};
const files = fs.readdirSync(path.resolve(__dirname, '../src/nhsd/assets/icons'));
Object.keys(files).forEach((fileKey) => {
    const file = files[fileKey];
    if (file.substr(-4) === '.svg') {
        const name = file.substr(0, file.length - 4);
        const data = fs.readFileSync(path.resolve(__dirname, '../src/nhsd/assets/icons', file), { encoding: 'utf8', flag: 'r' });
        svgs[name] = data;
    }
});

module.exports = function () {
    return svgs;
};
