import { toNewBlog } from "../utils.js"
import { Blog } from ".././models/Blog.js"

const blogsData =  await getBlogsFromDb();

const blogs = blogsData.map(obj => {
    const object = toNewBlog(obj);
    return object;
})

async function getBlogsFromDb(){
    const blogs = await Blog.find({})
                            .catch(error => console.log(error))
    return blogs
}

const getBlogs = () => {
    return blogs;
}

const addBlog = (blog) => {
    const toBlog = toNewBlog(blog);
    const newBlog = new Blog({
        title : toBlog.title,
        author : toBlog.author,
        url : toBlog.url,
        likes : toBlog.likes,
    })

    newBlog.save()
        .then(savedBlog => {
            return savedBlog;
        })
        .catch(error)
}

export { getBlogs, addBlog }