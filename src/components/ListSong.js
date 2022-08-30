import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'
//rfce
function ListSong() {
  const {DataSong , handeSetSong, song}= useContext(Songs)
  console.log(" data ", DataSong )
  const [idSong, setSong] = useState()
  const handlePlay = (idSong) => {
    setSong(idSong)
    handeSetSong(idSong)
  }
  useEffect(() => {
    setSong(song.id)
  }, [song])
  return (
    <div className='col-span-2 overflow-y-scroll'>
        <table className='table-auto w-full '>
        <thead className='text-white h-12'>
            <tr>
                <th>#</th>
                <th className='text-left'>Title</th>
                <th className='w-[10%]'> Author</th>
                <th className='w-[10%]'> <i className='fa fa-download'></i> </th>
            </tr>
        </thead>
        <tbody className='f'>
          {DataSong?.map((item, index) => {
            return (
              <tr key={index} className={`bg-slate-700 h-12 text-slate-500 hover:text-gray-300
               ${idSong === item.id && 'text-emerald-400 bg-slate-500'}`}
               onClick={() => handlePlay(item.id)}>
            <td className='text-center'>{index +1 }</td>
            <td className=''>{item.name}</td> 
            <td className='text-center'>{item.author}</td>
            <td className='text-center'><a href={item.url}><i className='fa fa-download'></i></a></td>
            </tr>
            )
          })}
        </tbody>
        </table>
    </div>
    
  )
}

export default ListSong