const Router = require("express")
const router = new Router()

router.post("/reg");
router.post("/login");
router.get("/users");

module.exports = router;
