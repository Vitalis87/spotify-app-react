import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { Loader, Error, SongCard } from '../components'
import { useAppSelector } from '../redux/hooks'
import {useGetSongsByCountryQuery} from '../redux/services/shazamCore'

const AroundYou: FC = () => {
  const [country, setCountry] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const {activeSong, isPlaying} = useAppSelector((state) => state.player)
  const {data, isFetching, error} = useGetSongsByCountryQuery(country)
  
  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_LG6qGjAVqjFd38pVkXwDcGva2zeht`)
    .then(res => setCountry(res?.data?.location?.country))
    .catch(err => console.log(err)
    .finally(() => setLoading(false)))
  }, [country])
 
  if(isFetching && loading) return <Loader title='Loading songs around you'/>

  if(error && country) return <Error/>
  
  return (
    <div className="flex flex-col">
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Aroud You <span className="font-black">{country}</span>
        </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i}/>
        ))}
      </div>
    </div>
  )
}

export default AroundYou