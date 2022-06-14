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

    const blogger = (author, blogs) => {
        return({
            author : author,
            blogs : blogs
        })
    }

    const bloggers = blogs.map(blog => {
        bloggers.forEach(blogger => {
            if(blog.author === blogger.author){blogger.blogs += 1; return;}
            return blogger(blog.author, 1);
        });
    });

    console.log(bloggers)

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
    const blogger = (author, likes) => {
        return({
            author : author,
            likes : likes
        })
    }

    let bloggers = [];
    bloggers = blogs.map(blog => {
        bloggers.forEach(blogger => {if(blogger.author === blog.author) blogger.likes += blog.likes; return;})
        return(blogger(blog.author, blog.likes));
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