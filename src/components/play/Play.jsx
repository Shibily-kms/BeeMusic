import React from 'react'
import './play.scss'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiMusic } from 'react-icons/fi';
import {
    BsArrowsAngleExpand, BsSkipForwardFill, BsSkipBackwardFill, BsPauseFill, BsShuffle,
    BsVolumeDown, BsVolumeUp
} from 'react-icons/bs';
import { IoRepeatOutline } from 'react-icons/io5';

function Play() {
    return (
        <div className='play'>
            <div className="first">
                <div className="left">
                    <div className="icon">
                        <MdOutlineFavoriteBorder />
                    </div>
                    <div className="icon">
                        <FiMusic />
                    </div>
                    <div className="icon">
                        <BsArrowsAngleExpand />
                    </div>
                </div>
                <div className="center">
                    <div className="icon">
                        <IoRepeatOutline />
                    </div>
                    <div className="icon next">
                        <BsSkipBackwardFill />
                    </div>
                    <div className="icon main">
                        <BsPauseFill />
                    </div>
                    <div className="icon next">
                        <BsSkipForwardFill />
                    </div>
                    <div className="icon">
                        <BsShuffle />
                    </div>
                </div>
                <div className="right">
                    <div className="icon">
                        <BsVolumeDown />
                    </div>
                    <div className="line-div voliume">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="button"></div>
                    </div>
                    <div className="icon">
                        <BsVolumeUp />
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="time">
                    <p>0:43</p>
                </div>
                <div className="line-div playbar">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="button"></div>
                </div>
                <div className="time">
                    <p>2:59</p>
                </div>
            </div>
        </div>
    )
}

export default Play