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
  
module.exports = { dummy, totalLikes, favouriteBlog }