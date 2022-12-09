import React, { FC } from 'react'
import {genres} from '../assets/constants'
import { SongCard, Loader, Error } from '../components'

import {useGetSongsByGenreQuery} from '../redux/services/shazamCore'
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import { IWorldChat } from '../types/worldChat'
import { selectGenreListId } from '../redux/features/playerSlice'

const Discover: FC = () => {
  const dispatch = useAppDispatch()
  const {activeSong, isPlaying, genreListId} = useAppSelector((state) => state.player)
  const {data, isFetching, error} = useGetSongsByGenreQuery(genreListId || 'POP')

  const genreTitle = genres.find(({value}) => value === genreListId)?.title

  if(isFetching) return <Loader title="Loading songs..."/>

  if(error) return <Error/>
  
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select onChange={(e) => dispatch(selectGenreListId(e.target.value))} value={genreListId || 'pop'} className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
         {genres.map(genre => (
          <option key={genre.value} value={genre.value}>{genre.title}</option>
         ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: IWorldChat, i: number) => (
          <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}/>
        ))}
      </div>
    </div>
  )
}

export default Discover