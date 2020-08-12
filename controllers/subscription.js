const webpush = require('../utils/webpush');
const Subscription = require('../models').Subscription;

const subscribe = (req,res) => {
    const subscription = req.body;

    return Subscription.create({
        endpoint: subscription.endpoint,
        expirationTime: subscription.expirationTime,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth
    })
    .then( (subscription) => {
        res.send(JSON.stringify(subscription));
    });
}

const sendAll = async(req,res) => {
    let subscriptions = await Subscription.findAll();
    const payload = JSON.stringify(
        {
            title:'I sent you a push noti',
            options: {
                body: 'This is Noti Body',
                image: 'http://localhost:5000/uploads/employee/images/p3.jpeg',
                icon: 'http://localhost:5000/public/icons/mpm_logo.png '
            }
        }
        );
    subscriptions.forEach( (item, index) => {
        let subscription = {
            endpoint: item.endpoint,
            expirationTime: null,
            keys: {
              p256dh: item.p256dh,
              auth: item.auth
            }
        };
        webpush.sendNotification(subscription, payload).catch( error => {
            console.error(error.stack);
        });
    });
    res.end();
}

module.exports = {
    subscribe, sendAll
}