import React from 'react'
import PostCard from './PostCard'
import PostMetaInfo from './PostMetaInfo'

const FeaturedPost = ({ postToDisplay }) => {
  return (
    <section className='featuredPost'>
      <a href="">
        <img src="" alt="" />
        <PostMetaInfo postToDisplay={postToDisplay} />
      </a>
    </section>
  )
}

export default FeaturedPost
