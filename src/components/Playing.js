import React, { useContext, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export const Playing = () => {
    const { song , handeSetSong} = useContext(Songs)
    const handClickNext = () => {
        handeSetSong(song.id +1)
    }
    const handClickPrevious = () => {
        handeSetSong(song.id - 1)

    }
    return (

        <div >
            <AudioPlayer className="play-music"
                src={song.url} showSkipControls={true}
                showJumpControls={false} 
                onClickNext={handClickNext}
                onClickPrevious={handClickPrevious}
                />
        </div>
    )
}
