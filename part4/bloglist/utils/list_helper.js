const _ = require('lodash')

const dummy = () => 1

const totalLikes = (blogs) =>
  blogs.reduce((sum, current) => sum + current.likes, 0)

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  return blogs.reduce((prev, current) =>
    prev && prev.likes > current.likes ? prev : current
  )
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  const blogsByAuthor = _.groupBy(blogs, 'author')

  const counts = Object.keys(blogsByAuthor).map((author) => ({
    author,
    blogs: blogsByAuthor[author].length
  }))

  return _.maxBy(counts, 'blogs')
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  const blogsByAuthor = _.groupBy(blogs, 'author')

  const counts = Object.keys(blogsByAuthor).map((author) => ({
    author,
    likes: blogsByAuthor[author].reduce(
      (sum, current) => sum + current.likes,
      0
    )
  }))

  return _.maxBy(counts, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
