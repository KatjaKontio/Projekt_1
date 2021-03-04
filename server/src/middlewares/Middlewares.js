import dotenv from 'dotenv'
import StatusCode from '../../configurations/StatusCode.js'

dotenv.config()
const { ENVIROMENT } = process.env

const notFound = (request, response, next) => {
    const error = new Error('invalid URL - NOT FOUND' + request.originalUrl)
    response.status()
    next(error)
}

const errorHandler = (error, request, response, next) => {
    const statuscode = response.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : response.statusCode
    response.status(StatusCode.NOT_FOUND)
    response.json({
        statuscode: statuscode,
        message: error.message,
        stackTrace: ENVIROMENT === 'PRODUCTION' ? null : error.stack
    })
}

export default {
    notFound,
    errorHandler
}