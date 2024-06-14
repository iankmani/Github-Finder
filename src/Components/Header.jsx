import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header-section'>
        <h1>GITHUB FINDER</h1>
        <p>By <a href="https://github.com/iankmani">Ian Kimani</a></p>
        <div className="inputandbutton">
        <input type="text" placeholder='enter a username' />
        <button>Search</button>

        </div> 
    </header>
   

  )
}

export default Header