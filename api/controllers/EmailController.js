const email = require('../services/email');

module.exports = {
    sendEmail: function(req, res) {
        sails.hooks.cron.jobs.sendEmailJob.start();
        // const toAddress = req.body.to;
        const payload = {};

        payload['to'] = req.body.to;
        payload['from'] = req.body.from;
        payload['password'] =req.body.password;
        payload['service'] = req.body.service;

        email.sendEmail(payload);
        sails.hooks.cron.jobs.sendEmailJob.stop();
        return res.json({ message: 'The email has been sent successfully!' });
    }
};