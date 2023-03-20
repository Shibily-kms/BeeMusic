import React from 'react'
import './center.scss'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import Trending from '../trending/Trending';
import Playlist from '../playlist/Playlist';
import Play from '../play/Play';

function Center() {
    return (
        <div className='center-comp'>
            <div className="one">
                <div className="top">
                    <div className="arrow">
                        <BsArrowLeftShort />
                        <BsArrowRightShort />
                    </div>
                    <div className="serach-div">
                        <span>
                            <FiSearch />
                        </span>
                        <input type="text" placeholder='Search for artist, songs and ...' />
                    </div>
                </div>
                <div className="trending-div">
                    <Trending />
                </div>
                <div className="palylist-div">
                    <Playlist />
                </div>

            </div>
            <div className="two">
                <Play />
            </div>
        </div>
    )
}

export default Center