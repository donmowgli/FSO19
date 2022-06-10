const toNewBlog = (title, author, url, likes) => {
    return({
        title : title,
        author : author,
        url : url,
        likes : likes
    })
}

export { toNewBlog }