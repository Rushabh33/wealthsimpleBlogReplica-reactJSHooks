import React, { useState, useEffect } from 'react'

const BlogPostsContainer = () => {

  const [topArticleIDs, setTopArticleIDs] = useState([])
  const [listOfArticles, setListOfArticles] = useState([])
  const [firstDisplayedPostIndex, setfirstDisplayedPostIndex] = useState(0)
  const [postsPerPage, setPostsPerPage] = useState(30)

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


  const getListofArticles = async () => {
    const articlesToDisplay = topArticleIDs.slice(firstDisplayedPostIndex, firstDisplayedPostIndex + postsPerPage)
    return await Promise.all(articlesToDisplay.map(id => getHackerNewsAPI(id, 'item')))
  }

  const updateListOfArticlesToDisplay = () => {
    getListofArticles().then(data => {
      setListOfArticles(data)
      setfirstDisplayedPostIndex(firstDisplayedPostIndex + postsPerPage)
    })
  }

  useEffect(() => {
    updateListOfArticlesToDisplay()
  }, [topArticleIDs])

  //sort out if i need to change firstDisplayedPostIndex to lastDisplayedPostIndex to accomadate for pagenation on scroll
  // use updateListOfArticlesToDisplay() for pagenation

  return (
    <div>

    </div>
  )
}

export default BlogPostsContainer
