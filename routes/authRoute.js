const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forget-password').post(authController.forgetPassword);
router.route("/resetcode").post(authController.verifyResetCode);
router.route("/resetpassword").post(authController.resetPassword);
router.route("/logout").get(authController.logout);

module.exports = router;