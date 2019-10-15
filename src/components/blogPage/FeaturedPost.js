import React from 'react'
import PostCard from './PostCard'
import PostMetaInfo from './PostMetaInfo'

const FeaturedPost = ({ featuredPostData }) => {

  return (
    <section className='featuredPost'>
      {featuredPostData ? <PostCard postInfo={featuredPostData} isFeaturedPost={true} /> : <div>loading</div>}
    </section>
  )
}

export default FeaturedPost



// <a href="">
// <img src="" alt="" />
// <PostMetaInfo postToDisplay={postToDisplay} />
// </a>