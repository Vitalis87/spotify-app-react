import React, { FC } from 'react'
import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'
import { ISongsRelated } from '../types/songsRelated'
import { IWorldChat } from '../types/worldChat'

interface PlayPauseProps {
  song: IWorldChat | ISongsRelated
  activeSong?: IWorldChat
  isPlaying?: boolean
  handlePause?: () => void
  handlePlay?: () => void
}

const PlayPause: FC<PlayPauseProps> = ({song, handlePause, handlePlay, activeSong, isPlaying}) => (isPlaying && activeSong?.title === song.title ? (<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause}/>) : (<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay}/>))

export default PlayPause