const router = require('express').Router();
const { createUser, getUsers, getSingleUser, updateUser, deleteUser } = require('../../controllers');

router
    .route('/')
    .post(createUser)
    .get(getUsers)

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;