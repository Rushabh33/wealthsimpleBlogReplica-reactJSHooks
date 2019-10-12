import React from 'react'
import Logo from './Logo'


const Navbar = () => {
  return (
    <nav>
      <div className='wrapper'>
        <div className='wrapper navigation'>
          <Logo />
          <ul>
            <li><a href="">Magazine</a></li>
            <li className='callToAction'><a href="">Start Investing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
