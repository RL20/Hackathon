const express = require("express");
const router = new express.Router();
const { getUsers, getUser, addUser, updateUser, removeUser } = require("../controllers/userControllers");

router.get("/users", getUsers);

router.get("/users/:id/", getUser);
router.post("/users", addUser);
router.put("/users/:id/", updateUser);
router.delete("/users/:id/", removeUser);
// patch
module.exports = router;
