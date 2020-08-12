const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes');
const cors = require('cors');
const cron = require('node-cron');
const webpush = require('./utils/webpush');
const notiPayloads = require('./utils/notipayloads');
const Subscription = require('./models').Subscription;
// const fs = require('fs');
// const http = require('http');
// const https = require('https');

// const con = require('./db')
app.use(cors());
app.use(bodyParser.json())
app.use(router)
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname))

// const privateKey = fs.readFileSync('ssl/server.key');
// const certificate = fs.readFileSync('ssl/server.crt');

// const options = {key: privateKey, cert: certificate};

cron.schedule('*/5 * * * *', () => {
    let currentDate = new Date();
    let beforeLunchOut = new Date().setHours(12,00,00);
    let lunch = new Date().setHours(12,05,00);
    let beforeLunchIn = new Date().setHours(13,00,00);
    let lunchIn = new Date().setHours(13,05,00);
    let beforeLeave = new Date().setHours(17,00,00);
    let leave = new Date().setHours(17,05,00);
    if(currentDate >= beforeLunchOut && currentDate < lunch){
        console.log({ is: "NOti before lunch out", time: currentDate});//NOti before lunch out
        sendSwipeReminderNotiToAll(notiPayloads.beforeLunch);
    }else if(currentDate >= beforeLunchIn && currentDate < lunchIn){
        console.log({ is: "NOti before lunch in", time: currentDate});//NOti before lunch in
        sendSwipeReminderNotiToAll(notiPayloads.afterLunch);
    }else if(currentDate >= beforeLeave && currentDate < leave){
        console.log({ is: "NOti before Leave", time: currentDate});//NOti before Leave
        sendSwipeReminderNotiToAll(notiPayloads.beforeLeave);
    }else{
        console.log('No Noti');
    }
});

const sendSwipeReminderNotiToAll = async(payload) => {
    let subscriptions = await Subscription.findAll();
    subscriptions.forEach( (item, index) => {
        let subscription = {
            endpoint: item.endpoint,
            expirationTime: null,
            keys: {
              p256dh: item.p256dh,
              auth: item.auth
            }
        };
        webpush.sendNotification(subscription, JSON.stringify(payload)).catch( error => {
            console.error(error.stack);
        });
    });
}

app.listen(5000, () => {
    console.log('Node Server is listening on port 5000....')
});

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(options, app);

// httpServer.listen(6000);
// httpsServer.listen(5000);