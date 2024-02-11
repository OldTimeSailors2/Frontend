"use client";

import Image from "next/image";
import useMedia from "@/hooks/useMedia";

const Photo = ({ photo }) => {
  const { selectPhoto, openPhotoModal, isCarouselMoving } = useMedia();

  const handleClick = () => {
    selectPhoto(photo.urls.XL.url);
    openPhotoModal();
  };

  return (
    <div
      className="w-28 h-28 xs:w-[122px] xs:h-[122px] xs2:w-32 xs2:h-32 min-[428px]:w-[138px] min-[428px]:h-[138px] md1:w-[148px] md1:h-[148px] md:w-[186px] md:h-[186px] md2:w-[220px] md2:h-[220px]
     lg:w-[276px] lg:h-[276px] xl:max-[1359px]:w-[154px] xl:max-[1359px]:h-[154px]
      1xl:w-[165px] 1xl:h-[165px] 1xxl:w-44 1xxl:h-44 fullHD:w-[234px] fullHD:h-[234px] 2k:w-[308px] 2k:h-[308px]
       4k:w-[464px] 4k:h-[464px] relative cursor-pointer"
      onClick={(e) => {
        if (isCarouselMoving) {
          e.preventDefault();
        } else {
          handleClick();
        }
      }}
    >
      <div className="items-overlay" />
      <Image
        src={photo.urls.medium.url}
        alt="photo thubmnail"
        fill
        sizes="(max-width: 640px) 128px, 
                        (max-width: 1366px) 176px, 
                        (max-width: 2560px) 234px,
                        464px"
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="rounded-sm"
      />
    </div>
  );
};

export default Photo;
