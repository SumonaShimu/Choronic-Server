const express = require("express");
const router = express.Router();
// console.log(router);

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/../views/index.html");
    // res.status(200).json({ message: "home route" });
});

module.exports = router;
