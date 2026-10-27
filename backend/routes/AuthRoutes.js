const router = require("express").Router();
const { Signup } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const { Login } = require("../controllers/AuthController");
const { Logout} = require("../controllers/AuthController");

router.post("/verify", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout",Logout);

module.exports = router;