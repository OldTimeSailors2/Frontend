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
      <div className="md1:px-3 md:px-14 md2:px-14 lg:px-28 xl:p-0">
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-[5px] xl:gap-4">
        {images && images.map((image) => (
            <div key={image.id} className="flex justify-center items-center w-full h-auto" onClick={() => handleClick(image.urls.XL.url)}>
                <div className="aspect-w-1 aspect-h-1 w-full h-full flex justify-center items-center">
                    {/* Using Next.js Image component, ensure the layout is responsive */}
                    <Image
                        src={image.urls.large.url}
                        alt={`Image ${image.id}`}
                        priority={true}
                        fill={true} // This makes the image fill the container while maintaining aspect ratio
                        style={{objectFit: 'contain'}} // Adjust as needed to 'contain' for no cropping
                        className="rounded-sm cursor-pointer"
                        
                    />
                </div>
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
