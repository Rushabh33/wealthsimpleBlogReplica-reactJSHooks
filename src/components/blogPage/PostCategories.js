import React from 'react'
// import PostCard from './PostCard'
import FeaturedPost from './FeaturedPost'
import PostSubCategory from './PostSubCategory'

const PostCategories = ({ listOfPosts }) => {
  // 21239704 has image and description. Good for featured.
  const featuredPost = listOfPosts[21239704]
  const categoryAPosts = listOfPosts.slice(0, 4)
  const categoryBPosts = listOfPosts

  // const displayPosts = (data) => {
  //   data.map(item => <PostCard postsToDisplay={item} />)
  // }

  return (
    <div>
      <FeaturedPost postsToDisplay={featuredPost} />
      <PostSubCategory postsToDisplay={categoryAPosts} />
      <PostSubCategory postsToDisplay={categoryBPosts} />
    </div>
  )
}

export default PostCategories
