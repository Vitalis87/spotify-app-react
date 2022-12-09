import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IWorldChat } from '../types/worldChat'
import PlayPause from './PlayPause'

interface TopChartCardProps {
    song: IWorldChat
    i: number
    activeSong: IWorldChat
    isPlaying: boolean
    handlePauseClick: () => void
    handlePlayClick: () => void
}

const TopChartCard: FC<TopChartCardProps> = ({song, i, activeSong, isPlaying, handlePauseClick, handlePlayClick}) => {
  return (
    <div className="w-full flex items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg mb-2 cursor-pointer">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>
      <div className="flex flex-1 justify-between items-center">
        <img src={song.images.coverart} alt={song.title} className="w-14 h-14 rounded-lg"/>
        <div className="flex flex-1 flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song.title}</p>
          </Link>
          <Link to={`/artists/${song.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1">{song.subtitle}</p>
          </Link>
        </div>
      </div>

      <PlayPause song={song} activeSong={activeSong} isPlaying={isPlaying} handlePause={handlePauseClick} handlePlay={handlePlayClick}/>
    </div>
  )
}

export default TopChartCard