import UserController from '../controllers/User.controller.js'

const routes = application => {
    application.post('/user', UserController.createUser)
    application.get('/users', UserController.getAllUsers)
    application.delete('/user/:userId', UserController.deleteUser)
    application.put('/user/:userId', UserController.updateUser)
    application.get('/search', UserController.queryUsername)
    application.get('/searchuser', UserController.getUserById)
}

export default { routes }