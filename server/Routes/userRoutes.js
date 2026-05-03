const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/UserController");
const auth = require("../middleware/Auth");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

router.get("/", auth, ctrl.getUsers);
router.post("/", auth, ctrl.createUser);
router.put("/:id", auth, ctrl.updateUser);
router.delete("/:id", auth, ctrl.deleteUser);

module.exports = router;
