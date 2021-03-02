import UserController from '../controllers/User.controller.js'

const routes = application => {
    application.post('/user', UserController.createUser)
    application.get('/users', UserController.getAllUsers)
}

export default { routes }