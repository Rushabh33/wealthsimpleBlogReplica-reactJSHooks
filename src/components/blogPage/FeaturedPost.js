import React from 'react'
import PostCard from './PostCard'

const FeaturedPost = ({ featuredPostData }) => {

  return (
    <section className='featuredPost'>
      {featuredPostData ? <PostCard postInfo={featuredPostData} isFeaturedPost={true} /> : <div>loading</div>}
    </section>
  )
}

export default FeaturedPost