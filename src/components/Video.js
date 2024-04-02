import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

const Video = ({ video }) => {
  return (
    <div
      className={`${video.thumbnailStory ? "w-16 h-32 xs:w-16 xs:h-28 md:w-24 md:h-44 min-[900px]:w-32 min-[900px]:h-72 xl:w-16 xl:h-32 1xxl:w-[75px] 1xxl:h-36  fullHD:w-24 fullHD:h-52 2k:w-28 2k:h-50 4k:w-44 4k:h-96" : "w-44 h-28 2k:w-60 2k:h-36 4k:w-72 4k:h-44"} cursor-pointer relative`}
      data-video-url={video.url}
    >
      <div className="items-overlay-video" />
      <Image
        src={video.thumbnail}
        alt="video thubmnail"
        fill
        sizes="(max-width: 640px) 64px, 
                        (max-width: 900px) 96px, 
                        (max-width: 1366px) 75px,
                        (max-width: 1920px) 96px,
                        (max-width: 2560px) 112px,
                        176px"
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center z-9">
        <FaPlay className="text-white opacity-80 text-[26px] sm:text-[32px] min-[900px]:text-[40px] xl:text-[28px] 2xl:text-[36px] 2k:text-[44px] 4k:text-[56px]" />
      </div>
    </div>
  );
};

export default Video;
