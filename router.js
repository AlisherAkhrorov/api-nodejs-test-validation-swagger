const express = require('express');
const controller = require('./controller');
const validAuthorizations = require('./validAuthorization')
const validTransactions = require('./validTransactions')

const router = express.Router();

router.post('/get_transactions', validTransactions, controller.get_transactions);
router.post('/get_authorizations', validAuthorizations, controller.get_authorizations);

module.exports = router;