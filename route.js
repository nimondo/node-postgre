'use strict';
const router = require('express').Router();
const db = require('./queries');

router.get('/', db.getUsers);
router.get('/:id', db.getUserById);
router.post('/', db.createUser);
router.put('/:id', db.updateUser);
router.delete('/:id', db.deleteUser);
// router.post('/hollard_buy_callbackurl', callbackCtrl.hollardCallBack);
module.exports = router;