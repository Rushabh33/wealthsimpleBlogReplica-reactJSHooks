import React, { useState, useEffect } from 'react'

const PostMetaInfo = ({ postInfo, postDescription }) => {
  return (
    <div className='postMetaInfoContainer'>
      <span className="postCategory">money diaries</span>
      <h3 className="postTitle">{postInfo ? postInfo.title : 'loading'}</h3>
      <p>{postDescription ? postDescription : 'loading'}</p>
    </div>
  )
}

export default PostMetaInfo
