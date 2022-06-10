import {} from 'dotenv/config'
import mongoose from 'mongoose'
const url = process.env.MONGODB_URI;
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB: ', error.message)
})