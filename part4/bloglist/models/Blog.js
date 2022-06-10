import {} from 'dotenv/config'
import mongoose from "mongoose";

const url = process.env.MONGODB_URI;

mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB: ', error.message)
})

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema);
export { Blog };