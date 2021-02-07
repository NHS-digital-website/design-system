const fs = require('fs');

const read = (filePath) => fs.readFileSync(filePath, 'utf8', (error, data) => {
  if (error) {
    return error;
  }
  return data;
});

module.exports = {
  read,
};
