import './App.css';
import DetalSong from './components/DetalSong';
import ListSong from './components/ListSong';
import Nabar from './components/Nabar';
import { Songs } from './Context';
import DataSong from '../src/data/songs.json'
import { Playing } from './components/Playing';
import {useState } from 'react'

function App() {
  const [song, setSong] = useState(DataSong[0])

  const handeSetSong = (idSong) => {
  const song =   DataSong.find(song => song.id === idSong)
  if(!song)  setSong(song[0])
  else
     setSong(song)
  }
  return ( 
    <div>
     <Songs.Provider value={{ DataSong,  song, handeSetSong}}>
     <Nabar />
     <div className='grid grid-cols-3 bg-slate-600 h-screen-navbar-player overflow-hidden'>
      <DetalSong />
      <ListSong />
     </div>
     <Playing />
     </Songs.Provider>
    </div>
  );
}

export default App;
