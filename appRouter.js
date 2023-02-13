const Router = require("express")
const router = new Router()
const controller = require("./appController")
const {check} = require("express-validator")

router.post("/registration", [
    check("username", "User name is empty!").notEmpty(),
    check("password", "Your password must be at least 4 characters long!").isLength({min: 4})
], controller.registration);
router.post("/login", controller.login);
router.get("/userdata", controller.getUserData);
router.put("/userdata", controller.setUserData);
router.patch("/userdata", controller.addParticipants);
router.delete("/userdata", controller.delUser);

module.exports = router;
