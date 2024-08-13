const express = require("express");

const router = express.Router();

const {login, signup, viewprofile} = require("../controllers/UserController");

router.post("/login", login);
router.post("/signup", signup);
router.get("/viewprofile", viewprofile);


// router.post("/user", )
// router.get("/user", )
// router.put("/user", )
// router.delete("/user", )

module.exports = router;
