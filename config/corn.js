const email = require('../api/services/email');

module.exports.cron = {
    sendEmailJob: {
        // schedule: '30 29 08 13 sep *',
        schedule: '* * * * * *',
        
        onTick: function() {
            email.sendEmail();
        },
        start: false
    }
  };