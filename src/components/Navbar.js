import React from 'react'
import Logo from './Logo'


const Navbar = () => {
  return (
    <nav>
      <div className='wrapper'>
        <div className='wrapper navigation'>
          <Logo />
          <ul>
            <li><a href="#nothing">Magazine</a></li>
            <li className='button'><a href="#nothing">Start Investing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
