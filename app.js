const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Router
const userRouter = require("./routers/user.route.js");
const homeRouter = require("./routers/home.route.js");

//database connection
mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("connection successful with database"))
    .catch((err) => {
        console.log(err);
        process.exit(1); // to stop server when it occurs an error
    });

//create express server
const app = express();
app.use(cors()); // for any cross-origin (universal)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views")); // for static file


app.use("/", homeRouter);
app.use("/users", userRouter);

// not found route handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "page not fond",
    });
});

// server error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err,
    });
});

module.exports = app;
