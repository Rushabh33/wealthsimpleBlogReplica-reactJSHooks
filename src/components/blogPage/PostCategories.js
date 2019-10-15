import React, { useState } from 'react'
import PostCategory from './PostCategory'

const PostCategories = ({ listOfPosts, handleScrollLoading, postsPerPage }) => {

  const [categoryAPosts, setCategoryAPosts] = useState(listOfPosts.slice(0, 4))

  return (
    <div>
      <PostCategory postsToDisplay={categoryAPosts} handleScrollLoading={handleScrollLoading} postsPerPage={postsPerPage} />
      <PostCategory postsToDisplay={listOfPosts} handleScrollLoading={handleScrollLoading} postsPerPage={postsPerPage} />
    </div>
  )
}

export default PostCategories
