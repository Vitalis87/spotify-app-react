/* eslint-disable jsx-a11y/media-has-caption */
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React, { useRef, useEffect, FC } from 'react';
import { SongObject } from '../../types/worldChat';

interface PlayerProps {
  activeSong: SongObject
  isPlaying: boolean
  repeat: boolean
  volume: number
  seekTime: number
  onEnded: () => void
  onTimeUpdate: React.ReactEventHandler<HTMLAudioElement> | undefined
  onLoadedData: React.ReactEventHandler<HTMLAudioElement> | undefined
}

const Player: FC<PlayerProps> = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  
  const ref = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
