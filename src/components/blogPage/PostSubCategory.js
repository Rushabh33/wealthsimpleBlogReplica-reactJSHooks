import React, { useState, useEffect } from 'react'
import PostMetaInfo from './PostMetaInfo'

// right now doing the category with items to display
const PostSubCategory = ({ postsToDisplay, handleScrollLoading, postsPerPage }) => {
  const isCategoryAPosts = postsToDisplay.length < postsPerPage
  const [thumbnailPosts, setThumbnailPosts] = useState(postsToDisplay.slice(0, 4))
  const [displayThesePosts, setDisplayThesePosts] = useState(postsToDisplay)
  const [activateScrollLoading, setActivateScrollLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(false)

  const displayPosts = (data) => {
    { console.log(data) }
    return data.map(post => {
      return (
        <li className='post'>
          <a href={post.url}>
            <div className='postImageContainer'>
              <img src="" alt="" />
            </div>
            <PostMetaInfo metaInfo={post} />
          </a>
        </li>
      )
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    // setDisplayThesePosts(postsToDisplay)
    setActivateScrollLoading(true)
  }


  useEffect(() => {
    if (activateScrollLoading) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activateScrollLoading]);


  // handle scroll with a throttle 
  const handleScroll = () => {
    const readMoreContainer = document.getElementById('readMoreContainer')

    // setTimeout to throttle the use of handleScrollLoading
    if (window.innerHeight + window.scrollY >= readMoreContainer.clientHeight + readMoreContainer.offsetTop) {
      handleScrollLoading()
    }
  }

  useEffect(() => {
    setDisplayThesePosts(postsToDisplay)
  }, [postsToDisplay])

  return (
    <div>
      <ul>
        {displayPosts(activateScrollLoading ? displayThesePosts : thumbnailPosts)}
      </ul>
      <div id='readMoreContainer'>
        <button
          className={isCategoryAPosts ? 'hidden' : null}
          onClick={handleClick}>read more</button>
      </div>
    </div>
  )
}

export default PostSubCategory
