import React from 'react'
import Logo from '../Logo'

const BlogHero = () => {

  const handleClick = () => {
    const appInfo = document.getElementsByClassName('appInfo')[0]
    appInfo.classList.toggle('hidden')
  }

  return (
    <section className='blogHero wrapper'>
      <Logo />
      <h1>Magazine</h1>
      <h2>stories and ideas from wealthsimple</h2>
      <button onClick={handleClick}>
        Learn about the app
      </button>
      <div className='hidden wrapper appInfo'>
        <p>App Information:</p>
        <p>Used the HackerNews API, React and React Hooks to create a website similar to the Wealthsimple blog. A feature worth highlighting is the infinite scroll, which is activated AFTER pressing the 'read more' button near the bottom of the website. My intention behind this was to create a technical challenge.</p></div>
    </section>
  )
}

export default BlogHero
