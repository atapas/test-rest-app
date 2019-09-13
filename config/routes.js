/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'get /': '/api/users',
    'get /api/users': 'UserController.getUsers',
    'get /api/random-user': 'UserController.getRandomUser',
    
    'post /api/sendemail': 'EmailController.sendEmail'
};
