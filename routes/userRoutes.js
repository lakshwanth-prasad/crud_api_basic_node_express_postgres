const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/names-and-emails', UserController.getUsersNameAndEmail);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
