import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import PostMetaInfo from './PostMetaInfo'

// right now doing the category with items to display
const PostSubCategory = ({ postsToDisplay, handleScrollLoading }) => {
  const isCategoryAPosts = postsToDisplay.length < 30
  const [displayThesePosts, setDisplayThesePosts] = useState(postsToDisplay.slice(0, 4))
  const [activateScrollLoading, setActivateScrollLoading] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false)

  const displayPosts = (data) => {
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
    setDisplayThesePosts(postsToDisplay)
    setActivateScrollLoading(true)
  }

  useEffect(() => {
    if (activateScrollLoading) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activateScrollLoading]);


  useEffect(() => {
    if (loadMore) {
      console.log('callHandleScroll')
      setLoadMore(false)
      setLoading(false)
    }
  }, [loadMore])

  const handleScroll = () => {
    const readMoreContainer = document.getElementById('readMoreContainer')
    const rect = readMoreContainer.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    console.log(readMoreContainer.clientHeight + readMoreContainer.offsetTop)
    if (window.innerHeight + window.scrollY === readMoreContainer.clientHeight + readMoreContainer.offsetTop) {
      console.log('hello')
    }
    // if (elemBottom <= window.innerHeight){
    //   setLoadMore(true)
    // }

    // Only completely visible elements return true:
    // console.log(window.innerHeight)
    // console.log(elemBottom)
    // const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // if (!loading && isVisible) {
    //   setLoading(true)
    //   setLoadMore(true)
    // }
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  }

  return (
    <div>
      <ul>
        {displayPosts(displayThesePosts)}
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
