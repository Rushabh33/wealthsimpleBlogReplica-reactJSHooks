import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'

const PostCategory = ({ postsToDisplay, handleScrollLoading }) => {
  const [displayThesePosts, setDisplayThesePosts] = useState(postsToDisplay)
  const [activateScrollLoading, setActivateScrollLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(false)
  const thumbnailPosts = postsToDisplay.slice(0, 4)

  const displayPosts = (data) => {
    return data.map(post => {
      return (
        <li className='postCard'>
          <PostCard postInfo={post} isFeaturedPost={false} />
        </li>
      )
    })
  }

  useEffect(() => {
    if (activateScrollLoading) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activateScrollLoading]);

  useEffect(() => {
    if (!loadMore) return
    handleScrollLoading()
  }, [loadMore])

  useEffect(() => {
    setDisplayThesePosts(postsToDisplay)
    setLoadMore(false)
  }, [postsToDisplay])


  const handleClick = (e) => {
    e.preventDefault()
    setActivateScrollLoading(true)
  }

  const handleScroll = () => {
    const readMoreContainer = document.getElementsByClassName('readMoreContainer')[0]
    if (window.innerHeight + window.scrollY >= readMoreContainer.clientHeight + readMoreContainer.offsetTop) {
      setLoadMore(true)
    }
  }

  return (
    <div className='postCategory'>
      <ul className='postList'>
        {displayPosts(activateScrollLoading ? displayThesePosts : thumbnailPosts)}
      </ul>
      <div className='readMoreContainer'>
        {!loadMore
          ? <button onClick={handleClick}>Read more</button>
          : <div className='loadingDiv'><p>loading</p></div>}
      </div>
    </div>
  )
}

export default PostCategory
