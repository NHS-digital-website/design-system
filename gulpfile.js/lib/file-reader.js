const fs = require('fs')

const read = (filePath) => {
  return fs.readFileSync(filePath, 'utf8', (error, data) => {
    console.log(filePath, error, data);

    if (error) {
      return error;
    }
    return data;
  });
}

module.exports = {
  read
}
