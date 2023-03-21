import React from 'react'
import './home.scss'
import Sidebar from '../components/side-bar/Sidebar'
import Center from '../components/center/Center'
import Right from '../components/right/Right'

function Home() {
  return (
    <div className='home'>
      <div className="boader">
        <div className="sidebar-div">
          <Sidebar />
        </div>
        <div className="main-div">
          <div className="center-div">
            <Center />
          </div>
        </div>
        <div className="right-div">
          <Right />
        </div>
      </div>
    </div>
  )
}

export default Home