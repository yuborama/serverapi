const express = require("express");
const { readallusers, create, update, deleteuser, read } = require("../controllers/user.controller");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("hola mundo");
});

router.get("/users",readallusers);
router.post("/createuser",create);
router.post("/edituser:id",update);
router.post("/deleteuser:id",deleteuser);
router.post("/readuser:id",read)

module.exports = router;
