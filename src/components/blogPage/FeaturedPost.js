import React from 'react'
import PostCard from './PostCard'

const FeaturedPost = ({ featuredPostData }) => {

  return (
    <section className='featuredPost'>
      <PostCard postInfo={featuredPostData} isFeaturedPost={true} />
    </section>
  )
}

export default FeaturedPost