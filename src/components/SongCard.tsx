import React, { FC } from 'react'
import {Link} from 'react-router-dom'
import {useAppDispatch} from '../redux/hooks'

import PlayPause from './PlayPause'
import {playPause, setActiveSong} from '../redux/features/playerSlice'
import { IWorldChat } from '../types/worldChat'

interface SongCardProps {
  song: IWorldChat
  i: number
  isPlaying: boolean
  activeSong: IWorldChat
  data: IWorldChat[]
}

const SongCard: FC<SongCardProps> = ({song, activeSong, isPlaying, data, i}) => {
  const dispatch = useAppDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
  }
  
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} activeSong={activeSong} isPlaying={isPlaying}/>
        </div>
        <img src={song.images?.coverart} alt='song img'/>
      </div>
      <div className='flex flex-col mt-4'>
        <p className="text-white font-semibold text-lg truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm text-gray-300 mt-1 truncate">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard