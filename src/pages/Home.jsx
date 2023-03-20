import React from 'react'
import './home.scss'
import Sidebar from '../components/side-bar/Sidebar'

function Home() {
  return (
    <div className='home'>
      <div className="boader">
        <div className="sidebar-div">
          <Sidebar />
        </div>
        <div className="main-div">
          <div className="content-div">

          </div>
        </div>
        <div className="right-div">

        </div>
      </div>
    </div>
  )
}

export default Home