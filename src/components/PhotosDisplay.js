"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import useMedia from "@/hooks/useMedia";

const PhotosDisplay = () => {

  const { isPhotoModalOpen, closePhotoModal, deselectPhoto, photoList, clickedPhotoIndex } = useMedia();
  const carouselRef = useRef(null)

  const [loaded, setLoaded] = useState(false);
  const Modal = useRef(null);
  const ModalContent = useRef(null);
  const Carousel = useRef(null);

  //Dynamically import Carousel and Modal when isPhotoModalOpen is true
  useEffect(() => {
    if (isPhotoModalOpen && !loaded) {
      Promise.all([
        import('@nextui-org/modal').then((mod) => {
          Modal.current = mod.Modal;
          ModalContent.current = mod.ModalContent;
        }),
        import('react-multi-carousel').then((module) => {
          Carousel.current = module.default;
          import('react-multi-carousel/lib/styles.css');
          import('./carousel-styles.css');
        })
      ]).then(() => setLoaded(true));
    }
  }, [isPhotoModalOpen, loaded]);

  useEffect(() => {
    if ( clickedPhotoIndex !== null && carouselRef.current) {
      
      carouselRef.current.goToSlide(clickedPhotoIndex);
    }
  }, [clickedPhotoIndex]);


  const handleClose = () => {
    closePhotoModal();
    deselectPhoto()
  };

  const responsive = useMemo(() => ({
    all: {
      breakpoint: { max: Infinity, min: 0 },
      items: 1
    },
  }), []);

  //Component will not render if isn't loaded
  if (!loaded) return null;

  //Ref for the dynamically imported components
  const DynamicModal = Modal.current;
  const DynamicModalContent = ModalContent.current;
  const DynamicCarousel = Carousel.current;


  return (
    <DynamicModal
      isOpen={isPhotoModalOpen}
      onClose={handleClose}
      placement="center"
      classNames={{
        base: "flex items-center justify-center w-full bg-black max-w-[95vw] xl:max-w-[95dvh]",
        wrapper: "z-[110] overflow-y-hidden",
        backdrop: "z-[109]",
        closeButton: "z-[108] text-musicColor hover:bg-[#BFA98C] active:bg-[#B69E7C]",
      }}
      backdrop="blur"
    >
      <DynamicModalContent>
        

            <DynamicCarousel 
            responsive={responsive} 
            ref={carouselRef}
            infinite={false}
            autoPlay={false}
            keyBoardControl={true}           
            containerClass="w-full h-full"
            itemClass="flex items-center justify-center"
            >

            {photoList.map((photo) => (
              <Image key={photo.id}
                      src={photo.attributes.formats.xl ? photo.attributes.formats.xl.url : photo.attributes.url}
                       alt={`Slide ${photo.id}`}
                width={500}
                height={500} 
                className="w-[95vw] h-[95vw] xl:h-[95dvh]"
                sizes="(max-width: 1280px) 95vw, 95dvh"
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
               
               />
            ))}

            </DynamicCarousel>
        
      </DynamicModalContent>
    </DynamicModal>
  );
}

export default PhotosDisplay
