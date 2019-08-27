const users = require('./users.json');

module.exports.getAll = function() {
  return users;
}
