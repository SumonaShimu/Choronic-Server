const express = require("express");
const router = express.Router();
// console.log(router);

router.get("/", (req, res) => {
    res.send({ message: "home route" });
});

module.exports = router;
