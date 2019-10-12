import React from 'react'
import BlogHero from './BlogHero'
import BlogPostsContainer from './BlogPostsContainer'

const BlogPage = () => {
  return (
    <main>
      <BlogHero />
      {/* Filter section here */}
      <BlogPostsContainer />
    </main>
  )
}

export default BlogPage
