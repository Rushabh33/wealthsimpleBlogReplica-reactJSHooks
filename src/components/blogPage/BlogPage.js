import React from 'react'
import BlogHero from './BlogHero'
import BlogPostsContainer from './BlogPostsContainer'
import Footer from './Footer'

const BlogPage = () => {
  return (
    <>
      <main>
        <BlogHero />
        {/* Filter section here */}
        <BlogPostsContainer />
        <Footer />
      </main>
    </>
  )
}

export default BlogPage
