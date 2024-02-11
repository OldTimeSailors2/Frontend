"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Modal, ModalContent } from "@nextui-org/modal";
import useMedia from "@/hooks/useMedia";

export default function PhotosDisplay() {
  const { currentPhoto, isPhotoModalOpen, closePhotoModal, deselectPhoto } =
    useMedia();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!currentPhoto) return;

    const img = new window.Image();
    img.src = currentPhoto;
    img.onload = () =>
      setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => console.error("Failed to load image");

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [currentPhoto]);

  const modalStyle = useMemo(() => {
    const aspectRatio = imageSize.width / imageSize.height;
    return {
      maxWidth: aspectRatio < 1 ? `${aspectRatio * 95}vh` : "95vh",
    };
  }, [imageSize]);

  const handleClose = () => {
    closePhotoModal();
    deselectPhoto();
  };

  return (
    <Modal
      isOpen={isPhotoModalOpen}
      onClose={handleClose}
      placement="center"
      style={modalStyle}
      classNames={{
        base: "flex items-center justify-center w-full",
        wrapper: "z-[110] overflow-y-hidden",
        backdrop: "z-[109]",
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
  );
}
