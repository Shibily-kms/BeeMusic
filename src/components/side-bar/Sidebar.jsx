import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { MdOutlineMenuOpen, MdOutlineKeyboardArrowRight, MdOutlineFavoriteBorder } from 'react-icons/md';
import { HiHome, HiOutlineUserGroup } from 'react-icons/hi';
import { BsGraphUpArrow, BsCalendar3, BsTicketPerforated, BsStar } from 'react-icons/bs';
import { FiCompass } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import Logo from '../../assets/images/logo.png'
import Profile from '../../assets/images/pf1.jpg'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="close-menu">
                    <div style={{ backgroundColor: '#D83621' }}></div>
                    <div style={{ backgroundColor: '#F5B73C' }}></div>
                    <div style={{ backgroundColor: '#4C9B32' }}></div>
                </div>
                <div className="icon">
                    <MdOutlineMenuOpen />
                </div>
            </div>
            <div className="logo-div">
                <img src={Logo} alt="" />
            </div>
            <div className="menu">
                <NavLink className="item" to='/'>
                    <HiHome />
                    <p>Home</p>
                </NavLink>
                <NavLink className="item" to='/a'>
                    <BsGraphUpArrow/>
                    <p>Trends</p>
                </NavLink>
                <NavLink className="item" to='/d'>
                    <FiCompass />
                    <p>Feed</p>
                </NavLink>
                <p className='sub-head'>Discover</p>
                <NavLink className="item" to='/f'>
                    <RxDashboard />
                    <p>New and Notable</p>
                </NavLink>
                <NavLink className="item" to='/s'>
                    <BsCalendar3 />
                    <p>Release Calendar</p>
                </NavLink>
                <NavLink className="item" to='/b'>
                    <BsTicketPerforated />
                    <p>Events</p>
                </NavLink>
                <p className='sub-head'>Your Collection</p>
                <NavLink className="item" to='/w'>
                    <MdOutlineFavoriteBorder />
                    <p>Favorite Songs</p>
                </NavLink>
                <NavLink className="item" to='/fx'>
                    <HiOutlineUserGroup />
                    <p>Artist</p>
                </NavLink>
                <NavLink className="item" to='/m'>
                    <BsStar />
                    <p>Albums</p>
                </NavLink>
                <div className="active-hover">
                    <div className="one"></div>
                    <div className="two"></div>
                </div>
            </div>
            <div className="profile">
                <div className="left">
                    <img src={Profile} alt="" />
                    <h5>Ceptari Tysa</h5>
                </div>
                <div className="right">
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </div>
    )
}

export default Sidebar