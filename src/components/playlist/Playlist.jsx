import React, { useState } from 'react'
import './playlist.scss'

function Playlist() {
    const [list, setList] = useState([
        {
            id: 1,
            title: "Priority",
            artist: 'Mos Def',
            time: '1:25',
            album: 'The Ecstic'
        },
        {
            id: 2,
            title: "Time is Ticking Out",
            artist: 'The Cranberries',
            time: '2:59',
            album: 'Wake Up And Smell'
        },
        {
            id: 3,
            title: "One Minute More",
            artist: 'Capital Cities',
            time: '3:23',
            album: 'In A Tidal Wave Of'
        },
        {
            id: 4,
            title: "Priority",
            artist: 'Mos Def',
            time: '1:25',
            album: 'The Ecstic'
        },
        {
            id: 5,
            title: "Time is Ticking Out",
            artist: 'The Cranberries',
            time: '2:59',
            album: 'Wake Up And Smell'
        },
    ])
    return (
        <div className='playlist'>
            <div className="header">
                <div className="left">
                    <h4>My Playlist</h4>
                </div>
                <div className="right">
                    <p>Show All</p>
                </div>
            </div>
            <div className="song-list">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TITLE</th>
                            <th>ARTIST</th>
                            <th className='time'>TIME</th>
                            <th>ALBUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {
                            return <tr key={item.id}>
                                <td>0{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.artist}</td>
                                <td className='time'>{item.time}</td>
                                <td>{item.album}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Playlist