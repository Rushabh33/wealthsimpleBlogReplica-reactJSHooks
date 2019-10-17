import React, { useState, useEffect } from 'react'
import PostMetaInfo from './PostMetaInfo'
import PlaceHolderImage from '../../assets/placeHolderImage.svg'

const PostCard = ({ postInfo, isFeaturedPost = false }) => {
  const [postImage, setPostImage] = useState('')
  const [postDescription, setPostDescription] = useState('')

  useEffect(() => {
    const ogs = require('open-graph-scraper');
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const options = { 'url': proxy + postInfo.url };
    ogs(options, function (error, results) {
      !error && results.data ? handleDisplayedInfo(results.data) : handleDisplayedInfo(error)
    });
  }, [])

  const handleDisplayedInfo = (data) => {
    if (data) {
      data.ogImage && data.ogImage.url ? setPostImage(data.ogImage.url)
        : data.ogImage && data.ogImage.length ? setPostImage(data.ogImage[0].url)
          : setPostImage(PlaceHolderImage)
      data.ogDescription && data.ogDescription.length < 800 ? setPostDescription(data.ogDescription)
        : data.ogDescription && data.ogDescription.length >= 800 ? setPostDescription(data.ogDescription.split('.').slice(0, 2).join('.') + '...')
          : setPostDescription('Page Not Found')
      return
    }
    setPostImage(PlaceHolderImage)
    setPostDescription('Page Not Found')
  }

  const addDefaultSrc = (e) => {
    e.target.src = PlaceHolderImage;
  }

  const imgDivClass = isFeaturedPost ? 'featuredPostImageContainer' : 'postImageContainer'
  const infoDivClass = isFeaturedPost ? 'featuredPostInfoContainer' : 'postInfoContainer'
  return (
    <a href={postInfo ? postInfo.url : null} target="_blank">
      <div className={imgDivClass}>
        <img src={postImage} onError={addDefaultSrc} alt={postInfo.title} />
      </div>
      <div className={infoDivClass}>
        <PostMetaInfo postInfo={postInfo} postDescription={postDescription} />
      </div>
    </a>
  )
}

export default PostCard