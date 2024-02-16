"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Modal, ModalContent } from "@nextui-org/modal";
import useMedia from "@/hooks/useMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PhotosDisplay = () => {

  const { isPhotoModalOpen, closePhotoModal, deselectPhoto, photoList, clickedPhotoIndex } = useMedia();
  const carouselRef = useRef(null)

  useEffect(() => {
    if ( clickedPhotoIndex !== null && carouselRef.current) {
      
      carouselRef.current.goToSlide(clickedPhotoIndex);
    }
  }, [clickedPhotoIndex]);


  const handleClose = () => {
    closePhotoModal();
  };

const responsive = {
  all: {
    breakpoint: { max: Infinity, min: 0 },
    items: 1
  },
}


  return (
    <Modal
      isOpen={isPhotoModalOpen}
      onClose={handleClose}
      placement="center"
      style={{maxWidth:'95dvh'}}
      classNames={{
        base: "flex items-center justify-center w-full",
        wrapper: "z-[110] overflow-y-hidden",
        backdrop: "z-[109]",
        closeButton: "z-[108] text-musicColor hover:bg-[#BFA98C] active:bg-[#B69E7C]",
      }}
      backdrop="blur"
    >
      <ModalContent>
        
        {photoList && (
            <Carousel 
            responsive={responsive} 
            ref={carouselRef}
            infinite={false}
            autoPlay={false}
            keyBoardControl={true}           
            containerClass="w-full h-full"
            itemClass="flex items-center justify-center"
            >

            {photoList.map((photo) => (
              <Image key={photo.id} src={photo.urls.XL.url} alt={`Slide ${photo.id}`}
               width={1024} height={1024} className="xl:w-[95dvh] xl:h-[95dvh]"
               style={{ objectFit: "contain" }}/>
            ))}

            </Carousel>
        )}
      </ModalContent>
    </Modal>
  );
}

export default PhotosDisplay
