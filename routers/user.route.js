const express = require("express");
const router = express.Router();
// console.log(router);

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/users.controller.js");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/", createUser);
// patch method is better to update a single document than put method
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
