import React, { useState, useEffect } from 'react'
import PostMetaInfo from './PostMetaInfo'

// right now doing the category with items to display
const PostSubCategory = ({ postsToDisplay, handleScrollLoading, postsPerPage }) => {
  const isCategoryAPosts = postsToDisplay.length < postsPerPage
  const [displayThesePosts, setDisplayThesePosts] = useState(postsToDisplay.slice(0, 4))
  const [activateScrollLoading, setActivateScrollLoading] = useState(false)
  const [loading, setLoading] = useState(false)
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

  // handle scroll with a throttle
  const handleScroll = () => {
    setTimeout(async function () {
      const readMoreContainer = document.getElementById('readMoreContainer')
      if (window.innerHeight + window.scrollY >= readMoreContainer.clientHeight + readMoreContainer.offsetTop - 50) {
        console.log(window.innerHeight + window.scrollY)
        console.log(readMoreContainer.clientHeight + readMoreContainer.offsetTop)
        // setLoadMore(true)
        await handleScrollLoading()
        console.log(displayThesePosts)
      }
    }
      , 1000)
  }


  // useEffect(() => {
  //   if (loadMore) {

  //     setLoadMore(false)
  //   }
  // }, [loadMore])

  // const handleScroll = () => {
  //   const readMoreContainer = document.getElementById('readMoreContainer')
  //   if (window.innerHeight + window.scrollY <= readMoreContainer.clientHeight + readMoreContainer.offsetTop) {
  //     console.log('hello')
  //   }


  // }

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
