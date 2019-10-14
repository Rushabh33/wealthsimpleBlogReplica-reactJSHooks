import React, { useState } from 'react'
import PostCard from './PostCard'
import PostMetaInfo from './PostMetaInfo'

// right now doing the category with items to display
const PostSubCategory = ({ postsToDisplay }) => {
  const isCategoryAPosts = postsToDisplay.length < 30
  const [displayThesePosts, setDisplayThesePosts] = useState(postsToDisplay.slice(0, 4))

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
  }

  return (
    <div>
      <ul>
        {displayPosts(displayThesePosts)}
      </ul>

      <div className={'readMoreContainer'}>
        <button
          className={isCategoryAPosts ? 'hidden' : null}
          onClick={handleClick}>read more</button>
      </div>

    </div>
  )
}

export default PostSubCategory
