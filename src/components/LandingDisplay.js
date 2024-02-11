"use client";

import Image from "next/image";
import { useState } from "react";
import { Modal, ModalContent } from "@nextui-org/modal";

const LandingDisplay = ({ images }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  {
    /*PHOTOS DISPLAY */
  }

  {
    /*Photo Functions*/
  }

  const selectPhoto = (photoUrl) => {
    setCurrentPhoto(photoUrl);
  };

  const deselectPhoto = () => {
    setCurrentPhoto(null);
  };

  const openPhotoModal = () => setIsPhotoModalOpen(true);
  const closePhotoModal = () => setIsPhotoModalOpen(false);

  const handleClose = () => {
    closePhotoModal();
    deselectPhoto();
  };

  const handleClick = (imageUrl) => {
    selectPhoto(imageUrl);
    openPhotoModal();
  };

  {
    /*PHOTOS DISPLAY END*/
  }

  return (
    <>
      <div className="md1:px-3 md:px-14 md2:px-14 min-[1024px]:px-28 xl:p-0">
        <div className=" grid grid-cols-2 xl:grid-cols-4 gap-[5px] xl:gap-4">
          {images &&
            images.map((image) => (
              <div key={image.id} className="flex justify-center items-center ">
                <Image
                  src={image.urls.large.url}
                  alt={`Image ${image.id}`}
                  priority={true}
                  width={160}
                  height={160}
                  onClick={() => handleClick(image.urls.XL.url)}
                  className="rounded-sm cursor-pointer h-[160px] xs:w-[170px] xs:h-[170px] min-[390px]:w-[175px] min-[390px]:h-[175px] xs2:w-[180px] xs2:h-[180px] min-[410px]:w-[186px] min-[410px]:h-[186px] min-[420px]:w-[192px] min-[420px]:h-[192px] min-[430px]:w-[195px] min-[430px]:h-[195px] md1:w-[270px] md1:h-[270px] md:w-[310px] md:h-[310px]   min-[810px]:w-[329px] min-[810px]:h-[329px]   min-[820px]:w-[334px] min-[820px]:h-[334px]     min-[1024px]:w-[375px] min-[1024px]:h-[375px]    xl:w-[294px] xl:h-[294px] 1xl:w-[315.5px] 1xl:h-[315.5px] 1xxl:w-[334px] 1xxl:h-[334px] fullHD:w-[454px] fullHD:h-[454px] 2k:w-[602px] 2k:h-[602px] 4k:w-[916px] 4k:h-[916px]"
                />
              </div>
            ))}
        </div>
      </div>

      {/*PHOTOS DISPLAY */}
      <Modal
        isOpen={isPhotoModalOpen}
        onClose={handleClose}
        placement="center"
        style={{ maxWidth: "95vh" }}
        classNames={{
          base: "flex items-center justify-center w-full",
          wrapper: "z-[110] overflow-y-hidden",
          backdrop: "z-[109] ",
          closeButton: "z-[108]",
        }}
        backdrop="blur"
      >
        <ModalContent>
          {currentPhoto && (
            <Image
              src={currentPhoto}
              alt="Selected Photo"
              width={1024}
              height={1024}
              className="xl:w-[95vh] xl:h-[95vh]"
              style={{ objectFit: "contain" }}
            />
          )}
        </ModalContent>
      </Modal>
      {/*PHOTOS DISPLAY END*/}
    </>
  );
};

export default LandingDisplay;
