/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const users = require('../services/user');

module.exports = {
    getUsers: function(req, res) {
        return res.json({ users: users.getAll() });
    },
    getRandomUser: function(req, res) {
        return res.json({ users: users.getRandomUser() });
    }
};