"use client";

import { createContext, useState, useEffect } from "react";

export const MediaContext = createContext();

export const MediaProvider = ({ children, playlist, videoList, photoList }) => {
  {
    /*Song States*/
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  {
    /*Video States*/
  }
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  {
    /*Photo States*/
  }
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  {
    /*Carousel*/
  }

  const [isCarouselMoving, setIsCarouselMoving] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  {
    /*Video Functions*/
  }

  const selectVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const deselectVideo = () => {
    setCurrentVideo(null);
  };

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

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

  return (
    <MediaContext.Provider
      value={{
        playlist,
        isModalOpen,
        openModal,
        closeModal,
        videoList,
        currentVideo,
        selectVideo,
        deselectVideo,
        isVideoModalOpen,
        openVideoModal,
        closeVideoModal,
        photoList,
        currentPhoto,
        selectPhoto,
        deselectPhoto,
        isPhotoModalOpen,
        openPhotoModal,
        closePhotoModal,
        isCarouselMoving,
        setIsCarouselMoving,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
