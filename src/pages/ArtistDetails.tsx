import React, { FC } from 'react'
import {useParams} from 'react-router-dom'
import {useGetArtistDetailsQuery} from '../redux/services/shazamCore'
import { DetailsHeader, Loader, RelatedSongs, Error } from '../components'

const ArtistDetails: FC = () => {
  const {id: artistId} = useParams()
  const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery(artistId)
  

  if(isFetchingArtistDetails) return <Loader title='Searching song details'/>

  if(error) return <Error/>

  return (
    <div className="flex flex-col">
      <DetailsHeader artistData={artistData} artistId={artistId}/>

      <RelatedSongs data={Object.values(artistData?.songs)} artistId={artistId} handlePauseClick={() => {}} handlePlayClick={() => {}}/>
    </div>
  )
}

export default ArtistDetails