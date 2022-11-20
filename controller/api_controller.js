const path = require('path');
const User = require('../model/user-model');
const { v4: uuidv4 } = require('uuid');

exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname + "/../view/index.html"))
    // res.send("hello")
}

exports.showItems = async (req, res) => {
    const allUSers = await User.find()
    res.status(200).send(allUSers)
}

exports.insertItems = async (req, res) => {
    const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age
    })
    await newUser.save()

    res.status(200).send("Item is  inserted")
}

exports.updateItems = async (req, res) => {
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate({ _id: id }, {
        $set: {
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).send(updateUser)
}

exports.deleteItems = async (req, res) => {
    const id = req.params.id;
    const updateUser = await User.deleteOne({ _id: id })

    res.status(200).send("Item is going to be deleted")
}