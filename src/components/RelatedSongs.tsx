import React, { FC } from 'react'
import { IWorldChat } from '../types/worldChat'
import { ISongsRelated } from '../types/songsRelated'
import SongBar from './SongBar'

interface RelatedSongsProps {
    data: ISongsRelated[]
    activeSong?: IWorldChat
    isPlaying?: boolean
    artistId?: string
    handlePauseClick: () => void
    handlePlayClick: (song, i) => void
  }

const RelatedSongs: FC<RelatedSongsProps> = ({data, isPlaying, activeSong, artistId, handlePauseClick, handlePlayClick}) => {

  return (
    <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

        <div className="mt-6 w-full flex flex-col">
         {data?.map((song, i) => (
            <SongBar key={`${song.key}-${artistId}-${i}`} song={song} i={i} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}/>
         ))}
        </div>
    </div>
  )
}

export default RelatedSongs