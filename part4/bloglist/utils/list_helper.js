const _ = require('lodash')

const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    let likes = 0;
    blogs.forEach(blog => {
        likes += blog.likes;
    });
    return likes;
}

const favouriteBlog = (blogs) => {
    if(blogs.length < 1){return null}
    let fblog = blogs[0];
    blogs.forEach(blog => {
        if(blog.likes > fblog.likes){
            fblog = blog;
        }
    })
    return fblog;
}

const mostBlogs = (blogs) => {
    if(blogs.length < 1){return null}

    let bloggers = [];

    blogs.forEach(blog => {
        let blogger = _.find(bloggers, { author : blog.author })
        if(blogger){ blogger.blogs += 1 }
        else{ bloggers.push( { author : blog.author, blogs : 1 } ) }
    })

    console.log(... bloggers);

    let most = bloggers[0];
    bloggers.forEach(blogger => {
        if(blogger.blogs > most.blogs){
            most = blogger;
        }
    })

    return most;
}

const mostLikes = (blogs) => {
    if(blogs.length < 1){return null}

    let bloggers = [];

    blogs.forEach(blog => {
        let blogger = _.find(bloggers, { author : blog.author })
        if(blogger){ blogger.likes += blog.likes }
        else{ bloggers.push( { author : blog.author, likes : blog.likes } ) }
    })

    let most = bloggers[0];
    bloggers.forEach(blogger => {
        if(blogger.likes > most.likes){
            most = blogger;
        }
    })

    return most;
}
  
module.exports = { dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes }