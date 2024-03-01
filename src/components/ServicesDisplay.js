"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";



const ServicesDisplay = ({ services }) => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [isDevice, setIsDevice] = useState();
  const [activeService, setActiveService] = useState("our-show");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
// Dynamic import states
  const [Modal, setModal] = useState(null);
  const [ModalContent, setModalContent] = useState(null);
  const [Carousel, setCarousel] = useState(null); 

  useEffect(() => {
    const handleResize = () => {
      let baseWidth;

      if (window.innerWidth >= 1280) {
        setIsDevice("desktop");
        baseWidth = 1280;
      } else if (window.innerWidth >= 600) {
        setIsDevice("tablet");
        baseWidth = 600;
      } else {
        setIsDevice("mobile");
        baseWidth = 360;
      }
      const currentWidth = window.innerWidth;
      const scale = Math.max(currentWidth / baseWidth, 1); // Ensure scale is never less than 1
      setScaleFactor(scale);
    };
    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  //Dynamically import Carousel based on device type
  useEffect(() => {
    async function loadCarousel() {
      if (isDevice === "tablet" || isDevice === "mobile" && !Carousel) {
        const CarouselModule = await import("react-multi-carousel");
        setCarousel(() => CarouselModule.default);
        await import("react-multi-carousel/lib/styles.css")
      }
    }

    loadCarousel();
  }, [isDevice]);

  const dynamicStyle = {
    "--hexagon-width": `${105 * scaleFactor}px`,
    "--hexagon-height": `${70.5 * scaleFactor}px`,
    "--hexagon-before-width": `${103 * scaleFactor}px`,
    "--hexagon-before-height": `${69 * scaleFactor}px`,
    "--hexagon-2-width": `${105 * scaleFactor}px`,
    "--hexagon-2-height": `${70.5 * scaleFactor}px`,
    "--hexagon-2-before-width": `${103 * scaleFactor}px`,
    "--hexagon-2-before-height": `${69 * scaleFactor}px`,
    "--hexagon-3-width": `${105 * scaleFactor}px`,
    "--hexagon-3-height": `${70.5 * scaleFactor}px`,
    "--hexagon-3-before-width": `${103 * scaleFactor}px`,
    "--hexagon-3-before-height": `${69 * scaleFactor}px`,
    "--octagon-width": `${250 * scaleFactor}px`,
    "--octagon-height": `${450 * scaleFactor}px`,
  };
  const dynamicStyleTablet = {
    "--hexagon-width": `${140 * scaleFactor}px`,
    "--hexagon-height": `${80 * scaleFactor}px`,
    "--hexagon-before-width": `${138.5 * scaleFactor}px`,
    "--hexagon-before-height": `${78 * scaleFactor}px`,
    "--hexagon-2-width": `${140 * scaleFactor}px`,
    "--hexagon-2-height": `${80 * scaleFactor}px`,
    "--hexagon-2-before-width": `${138.5 * scaleFactor}px`,
    "--hexagon-2-before-height": `${78 * scaleFactor}px`,
    "--hexagon-3-width": `${140 * scaleFactor}px`,
    "--hexagon-3-height": `${80 * scaleFactor}px`,
    "--hexagon-3-before-width": `${138.5 * scaleFactor}px`,
    "--hexagon-3-before-height": `${78 * scaleFactor}px`,
    "--octagon-width": `${435 * scaleFactor}px`,
    "--octagon-height": `${550 * scaleFactor}px`,
  };
  const dynamicStyleDesktop = {
    "--hexagon-width": `${126 * scaleFactor}px`,
    "--hexagon-height": `${69.3 * scaleFactor}px`,
    "--hexagon-before-width": `${124 * scaleFactor}px`,
    "--hexagon-before-height": `${68.3 * scaleFactor}px`,
    "--hexagon-2-width": `${235.2 * scaleFactor}px`,
    "--hexagon-2-height": `${69.3 * scaleFactor}px`,
    "--hexagon-2-before-width": `${233.2 * scaleFactor}px`,
    "--hexagon-2-before-height": `${68.3 * scaleFactor}px`,
    "--hexagon-3-width": `${168 * scaleFactor}px`,
    "--hexagon-3-height": `${69.3 * scaleFactor}px`,
    "--hexagon-3-before-width": `${166 * scaleFactor}px`,
    "--hexagon-3-before-height": `${68.3 * scaleFactor}px`,
    "--octagon-width": `${1240 * scaleFactor}px`,
    "--octagon-height": `${300 * scaleFactor}px`,
  };

  const activeServiceData = services.find(
    (service) => service.id === activeService,
  );

  /*CAROUSEL*/

  const responsive = useMemo(() => ( {
    mobile: {
      breakpoint: { max: 419, min: 0 },
      items: 2,
      partialVisibilityGutter: 5,
    },
    mobile2: {
      breakpoint: { max: 599, min: 420 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 760, min: 600 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    tablet2: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet3: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40,
    },
  }), [])

  /*IMAGES DISPLAY */

  {
    /*Images Functions*/
  }

  const selectImage = useCallback((image) => {
    setCurrentImage(image);
  }, []);


  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentImage(null);
  }, []);

  const handleClick = useCallback(async (image) => {
    if (!Modal || !ModalContent) {
      const modalModule = await import('@nextui-org/modal');
      setModal(() => modalModule.Modal);
      setModalContent(() => modalModule.ModalContent);
    }
    selectImage(image);
    openModal();
  }, [Modal, ModalContent, selectImage, openModal]);
  
  /*IMAGES DISPLAY END*/

  return (
    <div className="w-full px-0.5 min-[600px]:px-3 xl:px-4 flex xl:flex-col xl:items-center">
      {/*Buttons*/}
      <div
        className=" flex flex-col justify-between xl:w-full xl:flex-row xl:justify-evenly xl:px-3 fullHD:px-6 2k:px-9 4k:px-16"
        role="Button-group"
      >
        <button
          onClick={() => setActiveService("our-show")}
          style={
            isDevice === "desktop"
              ? dynamicStyleDesktop
              : isDevice === "tablet"
                ? dynamicStyleTablet
                : dynamicStyle
          }
          className={`services-hexagon transition-all ease-in duration-300 ${activeService === "our-show" ? "before:bg-redPattern text-beige" : "before:bg-beigePattern text-darkBlue"} before:bg-contain z-[10] flex justify-center items-center text-lg leading-4 xs2:text-xl xs2:leading-5  md1:text-[22px] md:text-3xl lg:text-4xl xl:text-[27px] 1xxl:text-3xl fullHD:text-4xl 2k:text-5xl 4k:text-7xl font-titles text-center`}
        >
          <p className="z-[20]">our show</p>
        </button>
        <button
          onClick={() => setActiveService("festival-and-event-organization")}
          style={
            isDevice === "desktop"
              ? dynamicStyleDesktop
              : isDevice === "tablet"
                ? dynamicStyleTablet
                : dynamicStyle
          }
          className={`services-hexagon-2 transition-all ease-in duration-300 ${activeService === "festival-and-event-organization" ? "before:bg-redPattern text-beige " : "before:bg-beigePattern text-darkBlue"} before:bg-contain z-[10] flex justify-center items-center text-lg leading-4 xs:leading-6 xs2:text-xl xs2:leading-5  md1:text-[22px] md1:leading-5 md:text-3xl md:leading-[25px] md3:leading-7 lg:text-4xl xl:leading-7 xl:text-[27px] 1xxl:text-3xl fullHD:text-4xl 2k:text-5xl 4k:text-7xl  font-titles text-center`}
        >
          <p className="z-[20]">festival and event organization</p>
        </button>
        <button
          onClick={() => setActiveService("the-beast")}
          style={
            isDevice === "desktop"
              ? dynamicStyleDesktop
              : isDevice === "tablet"
                ? dynamicStyleTablet
                : dynamicStyle
          }
          className={`services-hexagon transition-all ease-in duration-300 ${activeService === "the-beast" ? "before:bg-redPattern text-beige " : "before:bg-beigePattern text-darkBlue"} before:bg-contain z-[10] flex justify-center items-center text-lg leading-4 xs2:text-xl xs2:leading-5  md1:text-[22px] md:text-3xl lg:text-4xl xl:text-[27px]  1xxl:text-3xl fullHD:text-4xl 2k:text-5xl 4k:text-7xl font-titles text-center`}
        >
          <p className="z-[20]">hms warrior</p>
        </button>
        <button
          onClick={() => setActiveService("music-agency")}
          style={
            isDevice === "desktop"
              ? dynamicStyleDesktop
              : isDevice === "tablet"
                ? dynamicStyleTablet
                : dynamicStyle
          }
          className={`services-hexagon transition-all ease-in duration-300 ${activeService === "music-agency" ? "before:bg-redPattern text-beige " : "before:bg-beigePattern text-darkBlue"} before:bg-contain z-[10] flex justify-center items-center text-lg leading-4 xs2:text-xl xs2:leading-5  md1:text-[22px] md:text-3xl lg:text-4xl xl:text-[27px] xl:leading-7  1xxl:text-3xl fullHD:text-4xl 2k:text-5xl 4k:text-7xl 1xl:leading-7 font-titles text-center`}
        >
          <p className="z-[20]">music agency</p>
        </button>
        <button
          onClick={() => setActiveService("festival-within-a-festival")}
          style={
            isDevice === "desktop"
              ? dynamicStyleDesktop
              : isDevice === "tablet"
                ? dynamicStyleTablet
                : dynamicStyle
          }
          className={`services-hexagon-2 transition-all ease-in duration-300 ${activeService === "festival-within-a-festival" ? "before:bg-redPattern text-beige " : "before:bg-beigePattern text-darkBlue"} before:bg-contain z-[10] flex justify-center items-center text-lg leading-4 xs2:text-xl xs2:leading-5   md1:text-[22px] md1:leading-6 md:text-3xl md:leading-[25px] md3:leading-7 lg:text-4xl xl:text-[27px] xl:leading-7  1xxl:text-3xl fullHD:text-4xl 2k:text-5xl 4k:text-7xl 1xl:leading-7 font-titles text-center`}
        >
          <p className="z-[20]">festival within a festival</p>
        </button>
        <button
          onClick={() => setActiveService("pirate-props-and-games")}
          style={
            isDevice === "desktop"
              ? dynamicStyleDesktop
              : isDevice === "tablet"
                ? dynamicStyleTablet
                : dynamicStyle
          }
          className={`services-hexagon-3 transition-all ease-in duration-300 ${activeService === "pirate-props-and-games" ? "before:bg-redPattern text-beige " : "before:bg-beigePattern text-darkBlue"} before:bg-contain z-[10] flex justify-center items-center text-lg leading-4 xs2:text-xl xs2:leading-5  md1:text-[22px]  md:text-3xl md:leading-[25px] md3:leading-7 lg:text-4xl xl:text-[27px] xl:leading-7   1xxl:text-3xl fullHD:text-4xl 2k:text-5xl 4k:text-7xl 1xl:leading-7 font-titles text-center`}
        >
          <p className="z-[20]">pirate props and games</p>
        </button>
      </div>

      {/*Red Octagon*/}
      <div
        style={
          isDevice === "desktop"
            ? dynamicStyleDesktop
            : isDevice === "tablet"
              ? dynamicStyleTablet
              : dynamicStyle
        }
        className="services-octagon bg-redPattern bg-contain flex flex-col justify-between py-2 xl:flex-row xl:items-center 1xl:gap-3 xl:px-4 4k:px-10  "
      >
        <div className="h-full max-xl:pb-4 xl:max-w-[400px] fullHD:max-w-[500px] 2k:max-w-[750px] 4k:max-w-[1100px] flex items-center">
          <div className="flex flex-col w-full px-2 md:px-6 lg:px-8 xl:px-1.5 fullHD:px-8">
            <Image
              src="/assets/deco-services-4.svg"
              width={110}
              height={25}
              alt="Deco 1"
              className="xs2:w-[140px] md:w-[180px] md2:w-[210px] lg:w-[240px]  xl:w-[150px] 1xl:w-[160px] 1xxl:w-[149px] fullHD:w-[230px] 2k:w-[310px] 4k:w-[430px]"
            />
            {activeServiceData && (
              <p
                className="text-pretty text-beige
                
                text-lg leading-5 xs:text-base xs2:text-xl xs2:leading-6  max-h-[240px] xs:max-h-[240px] xs2:max-h-[250px] min-[428px]:max-h-[280px]
                
                md1:max-h-[310px] md1:text-3xl md:max-h-[320px] md:text:4xl md2:max-h-[340px] lg:text-5xl lg:max-h-[420px]
                
                xl:text-lg xl:max-h-[200px] 1xl:max-h-[220px] 1xxl:max-h-[240px] fullHD:text-2xl fullHD:max-h-[320px] 2k:text-3xl 2k:max-h-[410px] 4k:text-5xl 4k:max-h-[650px] font-txt overflow-y-auto overflow-x-hidden"
                id="paragraph-scrollbar"
              >
                {activeServiceData.paragraph}
              </p>
            )}
            <Image
              src="/assets/deco-services-3.svg"
              width={110}
              height={25}
              alt="Deco 2"
              className="xs2:w-[140px] md:w-[180px] md2:w-[210px] lg:w-[240px] xl:w-[150px] 1xl:w-[160px] 1xxl:w-[149px] fullHD:w-[230px] 2k:w-[310px] 4k:w-[420px] self-end "
            />
          </div>
        </div>

        {isDevice === "mobile" || isDevice === "tablet" ? (

          Carousel && (
          <div className="w-full h-auto px-1 md:px-2 lg:px-4 pb-4">
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={[
                "tablet",
                "tablet2",
                "tablet3",
                "mobile",
                "mobile2",
              ]}
              draggable={false}
              infinite={true}
              partialVisible
              itemClass="flex justify-end"
            >
              {activeServiceData.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image.attributes.formats.medium ? image.attributes.formats.medium.url : image.attributes.formats.small.url}
                    width={110}
                    height={110}
                    alt={`Image ${index + 1}`}
                    className="rounded-md
                    
                    w-[110px] h-[110px] xs:w-[120px] xs:h-[120px] xs2:w-[130px] xs2:h-[130px]
                    
                    md1:w-[230px] md1:h-[230px] md:w-[230px] md:h-[230px] md2:w-[240px] md2:h-[240px] lg:w-[300px] lg:h-[300px]"
                    onClick={() => handleClick({
                      url: image.attributes.formats.xl ? image.attributes.formats.xl.url : image.attributes.url,
                      blurDataURL: image.blurDataURL
                    })}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          )
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {activeServiceData.images.map((image, index) => (
              <div key={index} className="services-images-grid">
                <Image
                  src={image.attributes.formats.medium ? image.attributes.formats.medium.url : image.attributes.formats.small.url}
                  width={220}
                  height={220}
                  alt={`Image ${index + 1}`}
                  className="rounded-sm cursor-pointer  1xxl:w-[240px] 1xxl:h-[240px] fullHD:w-[330px] fullHD:h-[330px] 2k:w-[440px] 2k:h-[440px] 4k:w-[630px] 4k:h-[630px]"
                  onClick={() => handleClick({
                    url: image.attributes.formats.xl ? image.attributes.formats.xl.url : image.attributes.url,
                    blurDataURL: image.blurDataURL
                  })}
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                />
              </div>
            ))}
          </div>
        )}

        {/*IMAGES DISPLAY */}

        { isModalOpen && Modal && ModalContent &&
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          placement="center"
          style={{maxWidth: '95dvh'}}
          classNames={{
            base: "flex items-center justify-center w-full",
            wrapper: "z-[110] overflow-y-hidden",
            backdrop: "z-[109] ",
            closeButton: "z-[108] text-musicColor hover:bg-[#BFA98C] active:bg-[#B69E7C]",
          }}
          backdrop="blur"
        >
          <ModalContent>
            {currentImage && (
              <Image
                src={currentImage.url}
                alt="Selected Image"
                width={1000}
                height={1000}
                className="xl:w-[95vh] xl:h-[95vh]"
                style={{ objectFit: "contain" }}
                priority={true}
                placeholder="blur"
                blurDataURL={currentImage.blurDataURL}
              />
            )}
          </ModalContent>
        </Modal>

            }
            
        {/*IMAGES DISPLAY END*/}
      </div>
    </div>
  );
};

export default ServicesDisplay;
