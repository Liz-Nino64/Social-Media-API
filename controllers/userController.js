const { User } = require('../models');

module.exports = {
    createUser: ({body}, res) => {
        User.create(body)
            .then(data => res.json(data))
    },
    getUsers: (req, res) => {
        User.find()
            .then(data => res.json(data))
    },
    getSingleUser: ({params}, res) => {
        User.find({_id: params.id})
            .then(data => res.json(data))
    },
    updateUser: ({body, params}, res) => {
        User.findOneAndUpdate({_id: params.id}, {$set: body}, {runValidators: true, new: true})
            .then(data => res.json(data))
    },
    deleteUser: ({body, params}, res) => {
        User.findOneAndDelete({_id: params.id})
            .then(data => res.json(data))
    }
};