import React from 'react'
import './App.scss';
import Navbar from './components/Navbar'
import BlogPage from './components/blogPage/BlogPage';


const App = () => {
  return (
    <div>
      <Navbar />
      <BlogPage />
    </div>
  )
}

export default App
