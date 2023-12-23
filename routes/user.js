const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.landing);
router.get('/perfil', userController.profile);

module.exports = router;