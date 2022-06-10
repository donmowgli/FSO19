import express from 'express';
import { getBlogs, addBlog } from '../services/blogService.js';

const router = express.Router();

router.get('/', (request, response, next) => {
    try{
        const blogs = getBlogs();
        response.json(blogs);
    } catch(error) {next(error)}
})
  
router.post('/', (request, response, next) => {
    try{
        const newBlog = addBlog(request.body);
        response.status(201).json(result);
    }
    catch(error) {next(error)}
})

router.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

export default router;