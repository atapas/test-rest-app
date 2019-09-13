const users = require('./users.json');

module.exports.getAll = function() {
  return users;
}

module.exports.getRandomUser = function() {
  const allUsers = this.getAll();
  const count = allUsers.length;
  const rand = Math.floor(Math.random() * count);
  
  let retReponse = [];
  retReponse.push(allUsers[rand]);
  return retReponse;
}
