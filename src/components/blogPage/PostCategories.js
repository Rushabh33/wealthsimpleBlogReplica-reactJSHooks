import React, { useState } from 'react'
import FeaturedPost from './FeaturedPost'
import PostSubCategory from './PostSubCategory'

const PostCategories = ({ listOfPosts, handleScrollLoading, postsPerPage }) => {
  // 21239704 has image and description. Good for featured.
  const [featuredPost, setFeaturedPost] = useState(21239704)
  const [categoryAPosts, setCategoryAPosts] = useState(listOfPosts.slice(0, 4))
  // const [categoryBPosts, setCategoryBPosts] = useState(listOfPosts)

  return (
    <div>
      <FeaturedPost postsToDisplay={featuredPost} />
      {/* <PostSubCategory postsToDisplay={categoryAPosts} /> */}
      <PostSubCategory postsToDisplay={listOfPosts} handleScrollLoading={handleScrollLoading} postsPerPage={postsPerPage} />
    </div>
  )
}

export default PostCategories
