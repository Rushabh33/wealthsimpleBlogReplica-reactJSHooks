import React from 'react'
import BlogHero from './BlogHero'
import PostCategoriesContainer from './PostCategoriesContainer'
import Footer from './Footer'

const BlogPage = () => {
  return (
    <main>
      <div className='blogPageContainer'>
        <BlogHero />
        {/* filter component here */}
        <PostCategoriesContainer />
      </div>
      <Footer />
    </main>
  )
}

export default BlogPage
