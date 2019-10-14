import React from 'react'
import FeaturedPost from './FeaturedPost'
import PostSubCategory from './PostSubCategory'

const PostCategories = ({ listOfPosts, handleScrollLoading }) => {
  // 21239704 has image and description. Good for featured.
  const featuredPost = listOfPosts[21239704]
  const categoryAPosts = listOfPosts.slice(0, 4)
  const categoryBPosts = listOfPosts

  return (
    <div>
      <FeaturedPost postsToDisplay={featuredPost} />
      {/* <PostSubCategory postsToDisplay={categoryAPosts} /> */}
      <PostSubCategory postsToDisplay={categoryBPosts} handleScrollLoading={handleScrollLoading} />
    </div>
  )
}

export default PostCategories
