const subscriptionRouter = require('express').Router();
const subscriptionController = require('../../controllers').subscription;

subscriptionRouter.post('/subscribe', subscriptionController.subscribe);
subscriptionRouter.get('/send-all', subscriptionController.sendAll);

module.exports = subscriptionRouter;