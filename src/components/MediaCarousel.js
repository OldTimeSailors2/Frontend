"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Song from "./Song";
import Video from "./Video";
import Photo from "./Photo";
import useMedia from "@/hooks/useMedia";
import useBrowserDetection from "@/hooks/useBrowserDetection";
import { useState, useEffect } from "react";

const MediaCarousel = ({ mediaType }) => {
  const { playlist, videoList, photoList, setIsCarouselMoving } = useMedia();
  const { isSafari } = useBrowserDetection()
  const [startTouch, setStartTouch] = useState({ x: 0, y: 0 });

  useEffect(() => {
    import("./carousel-styles.css")
  }, []);

  let content;
  switch (mediaType) {
    case "song":
      content = playlist.map((s) => <Song key={s.id} song={s} />);
      break;
    case "video":
      content = videoList.map((v) => <Video key={v.id} video={v} />);
      break;
    case "photo":
      content = photoList.map((p, index) => <Photo key={p.id} photo={p} index={index} />);
      break;
    default:
      content = (
        <div className="w-full text-center text-3xl font-titles text-lightRed">
          no media found
        </div>
      );
  }

  const getResponsiveSettings = (type) => {
    switch (type) {
      case "song":
        return {
          fourK: { breakpoint: { max: 4000, min: 3000 }, items: 10 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 10 },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            partialVisibilityGutter: 20,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            partialVisibilityGutter: 15,
          },
        };
      case "video":
        return {
          fourK: { breakpoint: { max: 4000, min: 3000 }, items: 11 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 12 },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            partialVisibilityGutter: 8,
          },
        };
      case "photo":
        return {
          fourK: { breakpoint: { max: 4000, min: 1920 }, items: 7 },
          desktop2: { breakpoint: { max: 1900, min: 1536 }, items: 10 },
          desktop: { breakpoint: { max: 1500, min: 1024 }, items: 7 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
        };
    }
  };

  const responsive = getResponsiveSettings(mediaType);


  // Handlers for touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartTouch({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!startTouch.x || !startTouch.y) {
      return;
    }

    const currentTouch = e.touches[0];
    const deltaX = Math.abs(startTouch.x - currentTouch.clientX);
    const deltaY = Math.abs(startTouch.y - currentTouch.clientY);

    if (deltaX > deltaY) {
      // Horizontal swipe is greater than vertical swipe
      e.preventDefault(); // Prevent vertical scrolling
    }
  };

  const handleTouchEnd = () => {
    setStartTouch({ x: 0, y: 0 }); // Reset touch coordinates
  };

  return (
    <Carousel
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      draggable={false} // for desktop
      minimumTouchDrag={isSafari ? 75 : 50}
      containerClass="carousel-container"
      itemClass="item-carousel"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      partialVisible={false}
      centerMode={true}
      beforeChange={() => setIsCarouselMoving(true)}
      afterChange={() => setIsCarouselMoving(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {content}
    </Carousel>
  );
};

export default MediaCarousel;
