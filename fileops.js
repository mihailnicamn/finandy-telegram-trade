
const filesystem = require('fs');

const fileops = {
    read: function (filename) {
        return filesystem.readFileSync(filename, 'utf8');
    },
    write: function (filename, data) {
        filesystem.writeFileSync(filename, data);
    }
}

module.exports = fileops;