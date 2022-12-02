const router = require('express').Router()
const UsersServices = require('./users.services')

router.get('/', UsersServices.getAllUsers)
router.get('/:id', UsersServices.getUserById)
router.post('/', UsersServices.postUser)
router.patch('/:id', UsersServices.patchUser)
router.delete('/:id', UsersServices.deleteUser)


module.exports = router