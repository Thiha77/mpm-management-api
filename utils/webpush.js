const webpush = require('web-push');

const vapidKeys = {
    privateKey: "7npJhis0ZCgsynw5Y3kUSnwU9Ja8mUMOaedLjOIhYGs",
    publicKey: "BA6Nlj2mmLorOn6lwMDIGTlo5BdK5IxGkAZQ51pVKp1gJzhvunh4iY_SoNGOxJOOCMSS6yon0XfQYAM_B7FTcrE"
  };

webpush.setVapidDetails('mailto:aungthiha91020@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

module.exports = webpush;