const { test, describe } = require('node:test')
const assert = require('node:assert')
const { singleBlog, multipleBlogs } = require('./testData')
const {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
} = require('../utils/list_helper')

describe('list helper functions', () => {
  test('dummy returns one', () => {
    const blogs = []
    const result = dummy(blogs)

    assert.strictEqual(result, 1)
  })

  describe('total likes', () => {
    test('for only one blog, returns the likes of that', () => {
      const result = totalLikes(singleBlog)

      assert.strictEqual(result, 5)
    })

    test('for multiple blogs, returns the likes of all', () => {
      const result = totalLikes(multipleBlogs)

      assert.strictEqual(result, 36)
    })

    describe('edge cases', () => {
      test('for no blogs, returns zero', () => {
        const result = totalLikes([])

        assert.strictEqual(result, 0)
      })
    })
  })

  describe('favorite blog', () => {
    test('for only one blog, returns that', () => {
      const result = favoriteBlog(singleBlog)

      assert.deepStrictEqual(result, singleBlog[0])
    })

    test('for multiple blogs, returns blog with most likes', () => {
      const result = favoriteBlog(multipleBlogs)

      assert.deepStrictEqual(result, multipleBlogs[2])
    })

    describe('edge cases', () => {
      test('for no blogs, returns null', () => {
        const result = favoriteBlog([])

        assert.strictEqual(result, null)
      })
    })
  })

  describe('most blogs', () => {
    test('for only one blog, return the author of that', () => {
      const expected = {
        author: 'Edsger W. Dijkstra',
        blogs: 1
      }
      const result = mostBlogs(singleBlog)

      assert.deepStrictEqual(result, expected)
    })

    test('for multiple blogs, return the author with most blogs', () => {
      const expected = {
        author: 'Robert C. Martin',
        blogs: 3
      }
      const result = mostBlogs(multipleBlogs)

      assert.deepStrictEqual(result, expected)
    })

    describe('edge cases', () => {
      test('for no blogs, returns null', () => {
        const result = mostBlogs([])

        assert.strictEqual(result, null)
      })
    })
  })

  describe('most likes', () => {
    test('for only one blog, returns the author of that', () => {
      const expected = { author: 'Edsger W. Dijkstra', likes: 5 }
      const result = mostLikes(singleBlog)

      assert.deepStrictEqual(result, expected)
    })

    test('for multiple blogs, returns the author with the highest total likes', () => {
      const expected = { author: 'Edsger W. Dijkstra', likes: 17 }
      const result = mostLikes(multipleBlogs)

      assert.deepStrictEqual(result, expected)
    })

    describe('edge cases', () => {
      test('for no blogs, returns null', () => {
        const result = mostLikes([])

        assert.strictEqual(result, null)
      })
    })
  })
})
