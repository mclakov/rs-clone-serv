const Router = require("express")
const router = new Router()
const controller = require("./appController")
const {check} = require("express-validator")

router.post("/reg", [
    check("username", "User name is empty!").notEmpty(),
    check("password", "Your password must be at least 4 characters long!").isLength({min: 4})
], controller.reg);
router.post("/login", controller.login);
router.get("/user", controller.getUserData);
router.put("/user", controller.setUserData);

module.exports = router;
