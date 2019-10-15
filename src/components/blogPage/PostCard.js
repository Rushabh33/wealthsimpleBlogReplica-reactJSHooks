import React, { useState, useEffect } from 'react'
import PostMetaInfo from './PostMetaInfo'
import PlaceHolderImage from '../../assets/placeHolderImage.svg'

const PostCard = ({ postInfo, isFeaturedPost = false }) => {
  const [postImage, setPostImage] = useState('')
  const [postDescription, setPostDescription] = useState('')

  useEffect(() => {
    var ogs = require('open-graph-scraper');
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    var options = { 'url': proxy + postInfo.url };
    ogs(options, function (error, results) {
      if (error) {
        setPostImage(PlaceHolderImage)
        setPostDescription('Page Not Found')
        return
      }
      setPostImage(results.data.ogImage.url)
      setPostDescription(results.data.ogDescription)
    });
  }, [])

  const imgDivClass = isFeaturedPost ? 'featuredPostImageContainer' : 'postImageContainer'
  const infoDivClass = isFeaturedPost ? 'featuredPostInfoContainer' : 'postInfoContainer'

  return (
    <a href={postInfo ? postInfo.url : null}>
      <div className={imgDivClass}>
        <img src={postImage} alt={postInfo.title} />
      </div>
      <div className={infoDivClass}>
        <PostMetaInfo postInfo={postInfo} postDescription={postDescription} />
      </div>
    </a>
  )
}

export default PostCard