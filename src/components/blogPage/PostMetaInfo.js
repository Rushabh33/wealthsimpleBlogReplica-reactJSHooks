import React, { useState, useEffect } from 'react'

const PostMetaInfo = ({ postInfo, postDescription }) => {
  // console.log(postInfo['title'])
  return (
    <div className='postMetaInfoContainer'>
      <span className="postCategory">money diaries</span>
      <h3 className="postTitle">{postInfo ? postInfo.title : 'loading'}</h3>
      <p>{postDescription ? postDescription : 'loading'}</p>
    </div>
  )
}

export default PostMetaInfo
