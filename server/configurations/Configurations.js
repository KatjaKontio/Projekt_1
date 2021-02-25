import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDataBase = async () => {
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        console.log('SUCCESFULLY CONNECTED TO DATABASE...' + error)
        process.exit()
    }

}

const connectToPort = (application) => {
    application.listen(PORT, () => {
        console.log('SERVER IS RUNNING ON PORT: ' + 3001)

    })
}


export default {
    connectToDataBase,
    connectToPort
}







