"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Song from "./Song";
import Video from "./Video";
import Photo from "./Photo";
import useMedia from "@/hooks/useMedia";
import "./carousel-styles.css";

const MediaCarousel = ({ mediaType }) => {
  const { playlist, videoList, photoList, setIsCarouselMoving } = useMedia();

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
          fourK: { breakpoint: { max: 4000, min: 3000 }, items: 7 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
        };
    }
  };

  const responsive = getResponsiveSettings(mediaType);

  return (
    <Carousel
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      draggable={false} // for desktop
      minimumTouchDrag={25}
      containerClass="carousel-container"
      itemClass="item-carousel"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      partialVisible={false}
      centerMode={true}
      beforeChange={() => setIsCarouselMoving(true)}
      afterChange={() => setIsCarouselMoving(false)}
    >
      {content}
    </Carousel>
  );
};

export default MediaCarousel;
