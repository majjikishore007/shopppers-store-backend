const express = require('express');

const router = express.Router();
const { isAuthenticated, isSignedIn } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');
const { processPayment, getToken } = require('../controllers/paymentBtree');

router.param('userId', getUserById);
router.get('/payment/gettoken/:userId', isSignedIn, isAuthenticated, getToken);

router.post(
  '/payment/braintree/:userId',

  isSignedIn,
  isAuthenticated,
  processPayment,
);

module.exports = router;
