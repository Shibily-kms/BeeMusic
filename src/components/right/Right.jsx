import React, { useState } from 'react'
import './right.scss'
import { RxDotFilled } from 'react-icons/rx';
import { BsPlusSquare } from 'react-icons/bs';
import Image1 from '../../assets/images/pf1.jpg'
import Image2 from '../../assets/images/pf2.jpg'
import Image3 from '../../assets/images/pf3.jpg'
import Adz from '../../assets/images/pf3.jpg'

function Right() {

  const [artist, setArtist] = useState([
    {
      id: 1,
      name: "Taylor Swift",
      library: 196,
      image: Image1
    },
    {
      id: 2,
      name: "Kanye West",
      library: 124,
      image: Image2
    },
    {
      id: 3,
      name: "Drake",
      library: 50,
      image: Image3
    }
  ])

  return (
    <div className='right-comp'>
      <div className="section-one">
        <div className="title">
          <h4>Shortcuts</h4>
        </div>
        <div className="content">
          <div className="item">
            <p>❄️ Chill Hits</p>
          </div>
          <div className="item">
            <p>⭐ Hop</p>
          </div>
          <div className="item">
            <p>🎸 Acoustics</p>
          </div>
          <div className="item">
            <p>🎵 Indie Pop</p>
          </div>
          <div className="item">
            <p>🎹 Piano Blues</p>
          </div>
          <div className="item">
            <p>🎺 Jazz</p>
          </div>
        </div>
      </div>

      <div className="section-two">
        <div className="title">
          <h4>Fav Artist</h4>
        </div>
        {artist.map((artist) => {
          return <div className="profile">
            <div className="left">
              <img src={artist.image} alt="" />
              <div className="details">
                <h5>{artist.name}</h5>
                <p>{artist.library} songs in library</p>
              </div>
            </div>
            <div className="right">
              <div><RxDotFilled /></div>
              <div><RxDotFilled /></div>
            </div>
          </div>
        })}

      </div>

      <div className="section-three">
        <div className="image">
        </div>
        <div className="details">
          <div className="left">
            <h5>Torisetsu West</h5>
            <p>Kana Nishino</p>
          </div>
          <div className="right">
            <BsPlusSquare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right