"use client";

import Image from "next/image";
import useMedia from "@/hooks/useMedia";
import useMusicPlayer from "@/hooks/useMusicPlayer";

const Song = ({ song }) => {
  const { playSong, currentSong } = useMusicPlayer();
  const { openModal, isCarouselMoving } = useMedia();

  const handlePlay = () => {
    if (currentSong?.id === song.id) {
      openModal();
    } else {
      playSong(song.id);
      openModal();
    }
  };
  return (
    <>
      <div
        key={song.id}
        className="flex flex-col items-center gap-2 max-w-[120px] "
      >
        <h2 className="font-txt items-overlay-song text-[13px] sm:text-lg min-[900px]:text-[19px] xl:text-base 1xl:max-1xxl:text-[13px] 1xl:max-1xxl:leading-5 fullHD:text-xl 2k:text-[25px] 4k:text-3xl 2k:leading-8 text-center font-light uppercase tracking-tighter break-words">
          {song.title}
        </h2>
        <button
          onClick={(e) => {
            if (isCarouselMoving) {
              e.preventDefault();
            } else {
              handlePlay();
            }
          }}
          className="bg-beige p-2 sm:p-2.5 xl:p-2 2k:p-2.5 rounded-lg flex items-center justify-center relative"
        >
          <div className="items-overlay rounded-lg" />
          <Image
            src="/assets/song-icon.svg"
            width={30}
            height={30}
            className="text-lightRed h-[30px] xs2:w-[35px] xs2:h-[35px] sm:w-[40px] sm:h-[40px] min-[900px]:w-[50px] min-[900px]:h-[50px] xl:w-[30px] xl:h-[30px] 1xl:max-1xxl:w-[20px] 1xl:max-1xxl:h-[20px]  2k:w-[50px] 2k:h-[50px] 4k:w-[75px] 4k:h-[75px]"
            alt="Song icon"
          />
        </button>
      </div>
    </>
  );
};

export default Song;
