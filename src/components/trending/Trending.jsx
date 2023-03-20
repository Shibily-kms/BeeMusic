import React from 'react'
import './trending.scss'
import { RiArrowRightSLine } from 'react-icons/ri';

function Trending() {
    return (
        <div className='trending'>
            <div className="header">
                <div className="left">
                    <p>What’s hot 🔥</p>
                    <h4>Trending</h4>
                </div>
                <div className="right">
                    <p>More</p>
                    <RiArrowRightSLine />
                </div>
            </div>
            <div className="banner">
                <div className="left">
                    <h5>Artist</h5>
                    <h3>On Top<br></br>
                        Of The World</h3>
                    <div className="buttons">
                        <button className=' fill'>PLAY</button>
                        <button className=' not-fill'>FOLLOW</button>
                    </div>
                </div>
                <div className="right">
                    <h5>Monthly Listener</h5>
                    <h3>32.092</h3>
                </div>
            </div>
        </div>
    )
}

export default Trending