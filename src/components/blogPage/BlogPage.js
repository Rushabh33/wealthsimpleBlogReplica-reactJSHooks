import React from 'react'
import BlogHero from './BlogHero'
import PostCategoriesContainer from './PostCategoriesContainer'
import Footer from './Footer'

const BlogPage = () => {
  return (
    <>
      <main>
        <BlogHero />
        {/* filter component here */}
        <PostCategoriesContainer />
        <Footer />
      </main>
    </>
  )
}

export default BlogPage
