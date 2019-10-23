import React from 'react'
import PostCategory from './PostCategory'

const PostCategories = ({ listOfPosts, handleScrollLoading }) => {

  return (
    <div>
      <PostCategory postsToDisplay={listOfPosts} handleScrollLoading={handleScrollLoading} />
    </div>
  )
}

export default PostCategories
