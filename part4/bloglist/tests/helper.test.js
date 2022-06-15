const listHelper = require('../utils/list_helper');
const data = require('./testData');
const blogs = data.blogs;
const emptyList = []
const listWithOneBlog = emptyList.concat(blogs[0]);

test('dummy returns one', () => {
    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
})

describe('total likes', () => {

    test('when provided list is empty', () => {
        const result = listHelper.totalLikes(emptyList);
        expect(result).toBe(0);
      })
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog);
      expect(result).toBe(7);
    })

    test('when provided with full list of test data', () => {
        const result = listHelper.totalLikes(blogs);
        expect(result).toBe(36);
      })
})

describe('favourite blog', () => {

    test('when provided list is empty', () => {
        const result = listHelper.favouriteBlog(emptyList);
        expect(result).toBe(null);
    })

    test('when list has only one blog equals the only blog', () => {
        const result = listHelper.favouriteBlog(listWithOneBlog);
        expect(result).toBe(listWithOneBlog[0]);
    })

    test('when provided with full list of test data', () => {
        const result = listHelper.favouriteBlog(blogs);
        expect(result).toBe(blogs[2]);
    })
})

describe('Most blogs', () => {

    const blogger = (author, blogs) => {
        return({
            author : author,
            blogs : blogs
        })
    }

    test('when provided list is empty', () => {
        const result = listHelper.mostBlogs(emptyList);
        expect(result).toEqual(null);
    })

    test('when list has only one blog equals the only blog', () => {
        const result = listHelper.mostBlogs(listWithOneBlog);
        expect(result).toEqual(blogger(listWithOneBlog[0].author, 1));
    })

    test('when provided with full list of test data', () => {
        const result = listHelper.mostBlogs(blogs);
        expect(result).toEqual(blogger(blogs[3].author, 3));
    })
})

describe('Most likes', () => {

    const blogger = (author, likes) => {
        return({
            author : author,
            likes : likes
        })
    }

    test('when provided list is empty', () => {
        const result = listHelper.mostLikes(emptyList);
        expect(result).toEqual(null);
    })

    test('when list has only one blog equals the only blog', () => {
        const result = listHelper.mostLikes(listWithOneBlog);
        expect(result).toEqual(blogger(listWithOneBlog[0].author, listWithOneBlog[0].likes));
    })

    test('when provided with full list of test data', () => {
        const result = listHelper.mostLikes(blogs);
        expect(result).toEqual(blogger(blogs[1].author, 17));
    })
})