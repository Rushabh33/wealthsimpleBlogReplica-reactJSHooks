import React, { useState } from 'react'
import FeaturedPost from './FeaturedPost'
import PostCategory from './PostCategory'

const PostCategories = ({ listOfPosts, handleScrollLoading, postsPerPage, setLoading }) => {
  // 21239704 has image and description. Good for featured.
  // const [featuredPost, setFeaturedPost] = useState(21239704)
  const [categoryAPosts, setCategoryAPosts] = useState(listOfPosts.slice(0, 4))
  // const [categoryBPosts, setCategoryBPosts] = useState(listOfPosts)

  return (
    <div>
      <PostCategory postsToDisplay={categoryAPosts} handleScrollLoading={handleScrollLoading} postsPerPage={postsPerPage} setLoading={setLoading} />
      <PostCategory postsToDisplay={listOfPosts} handleScrollLoading={handleScrollLoading} postsPerPage={postsPerPage} setLoading={setLoading} />
    </div>
  )
}

export default PostCategories
