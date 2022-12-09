import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";
import TopChartCard from "./TopChartCard";
import { IWorldChat } from "../types/worldChat";

const TopPlay: FC = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const topTracks = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: IWorldChat, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 flex flex-col xl:max-w-[500px] max-w-full"
    >
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topTracks?.map((song: IWorldChat, i: number) => (
            <TopChartCard song={song} i={i} key={song.key} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={() => handlePlayClick(song, i)}/>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base">See more</p>
          </Link>
        </div>

        <Swiper slidesPerView="auto" spaceBetween={15} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4">
           {topTracks?.map((song: IWorldChat) => (
            <SwiperSlide key={song.key} style={{width: '25%', height: 'auto'}} className="shadow-lg rounded-full animate-slideright">
               <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img src={song?.images.background} alt="artist name" className="rounded-full w-full object-cover"/>
               </Link>
            </SwiperSlide>
           ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
