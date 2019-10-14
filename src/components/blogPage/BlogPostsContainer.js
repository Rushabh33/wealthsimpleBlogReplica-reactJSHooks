import React, { useState, useEffect } from 'react'
import PostCategories from './PostCategories'
import FeaturedPost from './FeaturedPost'

const BlogPostsContainer = () => {

  const [topArticleIDs, setTopArticleIDs] = useState([])
  const [listOfPosts, setListOfPosts] = useState([])
  const [lastDisplayedPostIndex, setLastDisplayedPostIndex] = useState(0)
  const [postsPerPage, setPostsPerPage] = useState(30)
  const [loading, setLoading] = useState(false)

  const getHackerNewsAPI = async (query, queryCategory = '') => {
    const url = `https://hacker-news.firebaseio.com/v0/${queryCategory + '/'}${query}.json`
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(proxy + url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    getHackerNewsAPI('topstories').then(data => setTopArticleIDs(data))
  }, [])

  useEffect(() => {
    addToListOfPostsToDisplay()
  }, [topArticleIDs])

  const addToListOfPostsToDisplay = () => {
    if (listOfPosts.length < 501) {
      return getListofPosts().then(data => {
        setListOfPosts([...listOfPosts, ...data])
        setLastDisplayedPostIndex(lastDisplayedPostIndex + postsPerPage)
        setLoading(false)
      })
    }
  }

  const getListofPosts = async () => {
    const listOfPostsToDisplay = topArticleIDs.slice(lastDisplayedPostIndex, lastDisplayedPostIndex + postsPerPage)
    return await Promise.all(listOfPostsToDisplay.map(id => getHackerNewsAPI(id, 'item')))
  }



  const handleScrollLoading = () => {
    console.log('fetch')
    addToListOfPostsToDisplay()
  }

  return (
    <>
      {listOfPosts.length
        ? <div>
          <PostCategories listOfPosts={listOfPosts} handleScrollLoading={handleScrollLoading} postsPerPage={postsPerPage} />
        </div>
        : <div>loading</div>}
    </>
  )
}

export default BlogPostsContainer
