import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'

// right now doing the category with items to display
const PostCategory = ({ postsToDisplay, handleScrollLoading, postsPerPage, setLoading }) => {
  const isCategoryAPosts = postsToDisplay.length < postsPerPage
  const [thumbnailPosts, setThumbnailPosts] = useState(postsToDisplay.slice(0, 4))
  const [displayThesePosts, setDisplayThesePosts] = useState(postsToDisplay)
  const [activateScrollLoading, setActivateScrollLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(false)

  const displayPosts = (data) => {
    return data.map(post => {
      return (
        <li className='postCard'>
          <PostCard postInfo={post} isFeaturedPost={false} />
        </li>
      )
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    setActivateScrollLoading(true)
  }

  useEffect(() => {
    if (activateScrollLoading && !isCategoryAPosts) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activateScrollLoading]);

  const handleScroll = () => {
    const categoryBContainer = document.getElementById('categoryBContainer')
    if (window.innerHeight + window.scrollY >= categoryBContainer.clientHeight + categoryBContainer.offsetTop) {
      setLoadMore(true)
    }
  }

  useEffect(() => {
    if (!loadMore) return
    handleScrollLoading()
  }, [loadMore])


  useEffect(() => {
    setDisplayThesePosts(postsToDisplay)
    setLoadMore(false)
  }, [postsToDisplay])

  return (
    <div className='postCategory'>
      <ul className='postList'>
        {displayPosts(activateScrollLoading ? displayThesePosts : thumbnailPosts)}
        {loadMore ? <div className='loadingDiv'>loading</div> : null}
      </ul>
      <div id={isCategoryAPosts ? null : 'categoryBContainer'} className='readMoreContainer'>
        <button
          className={isCategoryAPosts ? 'hidden' : null}
          onClick={handleClick}>read more</button>
      </div>
    </div>
  )
}

export default PostCategory
