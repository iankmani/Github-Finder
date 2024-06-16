import React from 'react'
// import Header from './Header';
import Profile from '../Pages/Profile';
import Repository from '../Pages/Repository';
import './Home.css'

const Home = () => {
  return (
    
    <div>
        <div className="home">
        
            <div className="profile">
            <Profile />
            </div>
            <div className="repository">
            <Repository />
            </div>
        </div>

    </div>
   
  )
}

export default Home