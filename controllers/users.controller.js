// Built-in Dependencies
const { v4: uuidv4 } = require("uuid");
// Custom Dependencies
const User = require("../models/user.model");

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// get single user
const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// create an user
const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: 27,
        });
        // to store newUser in mongoDB
        await newUser.save();
        // sending a response to front-end
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// update an user
const updateUser = async (req, res) => {
    try {
        const user = await User.updateOne(
            { id: req.params.id },
            { $set: { name: req.body.name, age: Number(req.body.age) } }
        );

        // to restore the user to mongoDB
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// delete an user
const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ id: req.params.id });

        res.status(200).json({
            message: "user was successfully deleted",
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
