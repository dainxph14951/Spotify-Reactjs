import React, { useContext } from 'react'
import { Songs } from '../Context';

function DetalSong() {
  const {song} = useContext(Songs);
  return (
    <div className='col-spam-1 p-3'>
        <h2 className='text-slate-400 font-bold'>Now Playing</h2>
        <h2 className='text-gray-500 text-2xl'>{song.name} </h2>
        <div className='w-[200px] m-auto mt-10'>
            <img className='w-full ' src={song.links.images[0].url} />
        </div>
        <div className='flex justify-evenly items-center  mt-10'>
            <img className='w-[50px] rounded-full'  src={song.links.images[0].url} />
        <span className='text-xl text-white'>{song.author}</span>
        </div>
    </div>
  )
}

export default DetalSong