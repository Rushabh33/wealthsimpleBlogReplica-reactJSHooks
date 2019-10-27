import React, { useState, useEffect } from 'react'
import PostCategories from './PostCategories'
import FeaturedPost from './FeaturedPost'

const PostCategoriesContainer = () => {

  const [topArticleIDs, setTopArticleIDs] = useState([])
  const [listOfPosts, setListOfPosts] = useState([])
  const [lastDisplayedPostIndex, setLastDisplayedPostIndex] = useState(0)
  const [featuredPostData, setFeaturedPostData] = useState({})
  const postsPerPage = 30

  const getHackerNewsAPI = async (query, queryCategory = '') => {
    const url = `https://hacker-news.firebaseio.com/v0/${queryCategory + '/'}${query}.json`
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(proxy + url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    getHackerNewsAPI('topstories').then(data => setTopArticleIDs(data))
    getHackerNewsAPI(21239704, 'item').then(data => {
      setFeaturedPostData(data)
    })
  }, [])

  useEffect(() => {
    addToListOfPostsToDisplay()
  }, [topArticleIDs])

  const addToListOfPostsToDisplay = () => {
    if (listOfPosts.length < 501) {
      return getListofPosts().then(data => {
        setListOfPosts([...listOfPosts, ...data])
        setLastDisplayedPostIndex(lastDisplayedPostIndex + postsPerPage)
      })
    }
  }

  const getListofPosts = async () => {
    const listOfPostsToDisplay = topArticleIDs.slice(lastDisplayedPostIndex, lastDisplayedPostIndex + postsPerPage)
    return await Promise.all(listOfPostsToDisplay.map(id => getHackerNewsAPI(id, 'item')))
  }

  const handleScrollLoading = () => {
    addToListOfPostsToDisplay()
  }

  return (
    <div className='postCategoriesContainer'>
      {listOfPosts.length
        ? <div className='wrapper'>
          <FeaturedPost featuredPostData={featuredPostData} />
          <PostCategories listOfPosts={listOfPosts} handleScrollLoading={handleScrollLoading} featuredPostData={featuredPostData} />
        </div>
        : <div className='loadingDiv'><p>loading</p></div>}
    </div>
  )
}

export default PostCategoriesContainer
