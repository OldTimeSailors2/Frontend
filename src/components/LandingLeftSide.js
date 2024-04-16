"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import wing from "../../public/assets/wing.svg";
import descriptionImage from "../../public/assets/description.svg";
import BlurbTitle from "../../public/assets/blurb-title.webp";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import useBrowserDetection from "@/hooks/useBrowserDetection";

const LandingLeftSide = () => {
  const { isSafari } = useBrowserDetection();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalComponent, setModalComponent] = useState(null);

  const handleClick = async () => {
    if (!ModalComponent) {
      const Modal = await import("@nextui-org/modal").then((mod) => mod.Modal);
      const ModalContent = await import("@nextui-org/modal").then(
        (mod) => mod.ModalContent,
      );
      const ModalHeader = await import("@nextui-org/modal").then(
        (mod) => mod.ModalHeader,
      );
      const ModalBody = await import("@nextui-org/modal").then(
        (mod) => mod.ModalBody,
      );
      setModalComponent({ Modal, ModalContent, ModalHeader, ModalBody });
    }
    setTimeout(() => {
      setIsModalOpen(true);
    }, 300);
  };

  return (
    <div className="flex justify-between ">
      <div
        className={`flex flex-col items-center justify-center   xl:ml-1 1xl:ml-1.5 1xxl:ml-1 fullHD:ml-4 2k:ml-6    xl:mt-[170px] 1xxl:mt-[190px] 4xl:mt-[210px]  fullHD:mt-[270px] 2k:mt-[380px] 4k:mt-[540px]  ${
          isSafari
            ? " ml-1  md1:ml-1.5  min-[810px]:ml-[1.15rem] min-[820px]:ml-6 lg:ml-7         mt-[7.75rem] iphone-1:mt-[8.35rem] iphone-2:mt-[9rem] md1:mt-[135px] md:mt-[160px] min-[820px]:mt-[195px] lg:mt-[220px]"
            : "ml-0.5 xs:ml-1 md:ml-3.5 min-[810px]:ml-2 min-[820px]:ml-2.5 lg:ml-[18px]     mt-[7.75rem] xs:mt-[8.35rem] xs2:mt-[9rem] md1:mt-[135px] md:mt-[160px] min-[820px]:mt-[195px] lg:mt-[250px] "
        }`}
      >
        <Image
          src={descriptionImage}
          width={100}
          height={100}
          alt="Text image"
          className={`self-center xl:w-[130px] xl:h-auto 1xxl:w-[150px] 4xl:w-[170px] fullHD:w-[200px] 2k:w-[280px] 4k:w-[400px] ${
            isSafari
              ? " iphone-1:w-[105px] iphone-2:w-[115px] md1:w-[110px]  min-[810px]:w-[100px] min-[820px]:w-[120px] lg:w-[140px]"
              : "xs:w-[105px] xs2:w-[115px] md1:w-[105px] min-[810px]:w-[125px] min-[820px]:w-[150px] lg:w-[190px] "
          }`}
        />
        {/* BlurbButton */}

        <div className="mt-1 xs:mt-2 xl:mt-1 1xxl:mt-2 2k:mt-3 4k:mt-4 flex justify-center xl:justify-between w-full">
          <div className="w-full h-auto relative">
            <Image
              src={wing}
              fill={true}
              alt="Left wing"
              className="mirror "
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            className={`text-darkBlue bg-lightRed tracking-wide font-titles rounded-md 1xxl:rounded-lg 4k:rounded-xl text-center xl:text-lg xl:font-medium xl:tracking-normal xl:leading-6  1xxl:text-xl  fullHD:text-2xl 2k:text-4xl 4k:text-6xl   xl:px-1 2k:px-2 2k:py-1 4k:py-1 4k:px-3
           ${
             isSafari
               ? "font-medium text-sm min-[425px]:text-base md1:text-lg min-[820px]:text-xl lg:text-2xl  px-1 iphone-3:px-1.5 md1:px-1"
               : "font-semibold text-sm xs2:text-base md1:text-lg min-[820px]:text-xl lg:text-3xl   px-1 xs2:px-1.5 md1:px-1"
           }`}
            onClick={() => handleClick()}
          >
            blurb
          </button>
          <div className="w-full h-auto relative">
            <Image
              src={wing}
              style={{ objectFit: "contain" }}
              alt="Right wing"
              fill={true}
            />
          </div>
        </div>

        {/* BlurbButton End */}

        {/* Social Media Icons */}

        <div
          className={`grid grid-cols-2 gap-2 xs2:gap-2.5 min-[820px]:gap-3.5 xl:gap-2 4xl:gap-4 2k:gap-6 4k:gap-9  xl:mt-10 xl:mb-6 1xl:mt-14 1xl:mb-10  fullHD:mt-16 2k:mt-20 2k:mb-14 4k:mt-32 4k:mb-20
      
      ${
        isSafari
          ? "mt-14 iphone-1:mt-14 iphone-2:mt-16  md1:mt-6 md:mt-3 min-[820px]:mt-5 lg:mt-6"
          : "mt-10 xs:mt-11 xs2:mt-9 min-[425px]:mt-11 md1:mt-4 md:mt-3 min-[820px]:mt-7 lg:mt-6"
      }
         `}
        >
          <Link
            className={`bg-beigePattern   bg-contain text-lightRed rounded-full flex justify-center items-center xl:p-1.5 xl:text-[28px]  1xxl:text-[30px] 1xxl:p-2 4xl:text-[36px] fullHD:text-[42px] 2k:text-[65px] 2k:p-3.5 4k:text-[80px] 4k:p-5
          
          ${
            isSafari
              ? "text-[20px] p-1.5 iphone-1:text-[22px] iphone-1:p-1.5 iphone-2:text-[24px] iphone-3:text-[25px] min-[430px]:text-[24px] md1:text-[35px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
              : "text-[25px] p-1.5 md1:text-[30px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
          }`}
            href="https://www.instagram.com/oldtimesailors"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className={`bg-beigePattern  bg-contain text-darkBlue rounded-full flex justify-center items-center xl:p-1.5 xl:text-[28px]  1xxl:text-[30px] 1xxl:p-2 4xl:text-[36px] fullHD:text-[42px] 2k:text-[65px] 2k:p-3.5 4k:text-[80px] 4k:p-5
          
          ${
            isSafari
              ? "text-[20px] p-1.5 iphone-1:text-[22px] iphone-1:p-1.5 iphone-2:text-[24px] iphone-3:text-[25px] min-[430px]:text-[24px] md1:text-[35px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
              : "text-[25px] p-1.5 md1:text-[30px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
          }`}
            href="https://www.facebook.com/oldtimesailors/"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            className={`bg-beigePattern  bg-contain text-darkBlue rounded-full flex justify-center items-center xl:p-1.5 xl:text-[28px]  1xxl:text-[30px] 1xxl:p-2 4xl:text-[36px] fullHD:text-[42px] 2k:text-[65px] 2k:p-3.5 4k:text-[80px] 4k:p-5
          
          ${
            isSafari
              ? "text-[20px] p-1.5 iphone-1:text-[22px] iphone-1:p-1.5 iphone-2:text-[24px] iphone-3:text-[25px] min-[430px]:text-[24px] md1:text-[35px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
              : "text-[25px] p-1.5 md1:text-[30px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
          }`}
            href="https://wa.me/447539045312"
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
          <Link
            className={`bg-beigePattern   bg-contain text-lightRed rounded-full flex justify-center items-center xl:p-1.5 xl:text-[28px]  1xxl:text-[30px] 1xxl:p-2 4xl:text-[36px] fullHD:text-[42px] 2k:text-[65px] 2k:p-3.5 4k:text-[80px] 4k:p-5
          
          ${
            isSafari
              ? "text-[20px] p-1.5 iphone-1:text-[22px] iphone-1:p-1.5 iphone-2:text-[24px] iphone-3:text-[25px] min-[430px]:text-[24px] md1:text-[35px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
              : "text-[25px] p-1.5 md1:text-[30px]  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "
          }`}
            href="mailto:captainnicholasmoffat@oldtimesailors.com"
            target="_blank"
          >
            <TfiEmail />
          </Link>
        </div>

        {/* Social Media Icons End */}

        {/* Modal */}

        { ModalComponent && (
          <ModalComponent.Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            size="xl"
            classNames={{
              base: "bg-beigePattern bg-center bg-cover rounded-3xl xl:rounded-[35px]",
              wrapper: "z-[110]",
              backdrop: "z-[109]",
              closeButton:
                "z-[108] text-[2.5rem] text-musicColor hover:bg-[#BFA98C] active:bg-[#B69E7C]",
              header: "border-none",
            }}
            backdrop="blur"
            placement="center"
          >
            <ModalComponent.ModalContent>
              <ModalComponent.ModalHeader className="pb-0 iphone-3:px-7 xl:px-8">
                <Image
                  src={BlurbTitle}
                  width={130}
                  height={44}
                  alt="Blurb title"
                  className="h-auto"
                  placeholder="blur"
                />
              </ModalComponent.ModalHeader>
              <ModalComponent.ModalBody className="pt-0 pb-6 iphone-3:px-7 xl:px-8">
                <p className=" text-darkBlue font-txt font-bold text-justify text-lg leading-[1.35rem] iphone-3:text-xl iphone-3:leading-6 md1:text-xl md2:text-2xl lg:text-3xl xl:text-xl fullHD:text-2xl 2k:text-4xl 4k:text-7xl">
                  <span className="text-lightRed">Ahoy there!</span> You are
                  invited to board the Sailorette and join the plentiful crew,
                  <span className="text-lightRed"> 'The Old Time Sailors'</span>
                  , for a night of footstomping, dancing and singing! You will
                  be sailing back to the 19th century for an{" "}
                  <span className="text-lightRed"> immersive experience </span>
                  of traditional seafaring music performed in a way you have
                  never seen before. The Motley Crew and their plethora of
                  traditional and eclectic instruments will take you back to the
                  time of clashing tankards, and drunken debauchery.
                  <br />{" "}
                  <span className="text-lightRed">
                    Sing and dance along like a drunken{" "}
                  </span>
                  sailor as the band perform centuries old folk and shanty
                  songs. Fancy dress is encouraged, so pull out your best
                  seafaring garments me hearties and{" "}
                  <span className="text-lightRed">join the festivities</span>
                </p>
              </ModalComponent.ModalBody>
            </ModalComponent.ModalContent>
          </ModalComponent.Modal>
        )}

        {/* Modal End */}
      </div>
      {/* Pages Buttons */}
      <div
        className="flex flex-col gap-1 xs:gap-1 md1:gap-3 xl:gap-2 2k:gap-3
           mt-1 min-[375px]:max-xs:mt-2 md1:mt-8 min-[820px]:mt-10 lg:mt-11 xl:mt-1.5 1xxl:mt-3 fullHD:mt-5 4k:mt-7
            mr-4 min-[375px]:max-xs:mr-8 xs:mr-6 iphone-1:max-[393px]:mr-7 iphone-2:max-[415px]mr-9 iphone-3:mr-9 md1:mr-6 min-[820px]:mr-10 lg:mr-11 xl:mr-12 1xxl:mr-14 fullHD:mr-20 2k:mr-28 4k:mr-36"
      >
        <Link
          className="octagon flex items-center justify-center bg-beigePattern bg-contain"
          href="/media"
        >
          <p className="text-center text-xl pb-[1px] min-[375px]:max-xs:text-lg xs:pb-0 xs2:text-[24px] min-[390px]:max-xs2:text-xl min-[414px]:max-[420px]:text-xl min-[428px]:text-xl  md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-2xl 1xxl:text-3xl fullHD:text-4xl 2k:text-6xl 4k:text-7xl font-titles text-darkBlue">
            media
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-bluePattern bg-contain"
          href="/tickets"
        >
          <p className="text-center text-xl pb-[1px] min-[375px]:max-xs:text-lg xs:pb-0 xs2:text-[24px] min-[390px]:max-xs2:text-xl min-[414px]:max-[420px]:text-xl min-[428px]:text-xl  md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-2xl 1xxl:text-3xl fullHD:text-4xl 2k:text-6xl 4k:text-7xl font-titles text-lightRed">
            tickets
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-redPattern bg-contain"
          href="https://oldtimesailors.com/"
          target="_blank"
        >
          <p className="text-center text-xl pb-[1px] min-[375px]:max-xs:text-lg xs:pb-0 xs2:text-[24px] min-[390px]:max-xs2:text-xl min-[414px]:max-[420px]:text-xl min-[428px]:text-xl  md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-2xl 1xxl:text-3xl fullHD:text-4xl 2k:text-6xl 4k:text-7xl font-titles text-beige">
            merch
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-bluePattern bg-contain"
          href="/reviews"
        >
          <p className="text-center text-xl pb-[1px] min-[375px]:max-xs:text-lg xs:pb-0 xs2:text-[24px] min-[390px]:max-xs2:text-xl min-[414px]:max-[420px]:text-xl min-[428px]:text-xl  md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-2xl 1xxl:text-3xl fullHD:text-4xl 2k:text-6xl 4k:text-7xl font-titles text-beige">
            reviews
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-beigePattern bg-contain"
          href="/our-clients"
        >
          <p className="text-center text-xl pb-[1px] min-[375px]:max-xs:text-lg xs:pb-0 xs2:text-[24px] min-[390px]:max-xs2:text-xl min-[414px]:max-[420px]:text-xl min-[428px]:text-xl  md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-2xl 1xxl:text-3xl fullHD:text-4xl 2k:text-6xl 4k:text-7xl tracking-wides font-titles font-medium text-lightRed">
            our clients
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-redPattern bg-contain"
          href="/services"
        >
          <p className="text-center text-xl pb-[1px] min-[375px]:max-xs:text-lg xs:pb-0 xs2:text-[24px] min-[390px]:max-xs2:text-xl min-[414px]:max-[420px]:text-xl min-[428px]:text-xl  md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-2xl 1xxl:text-3xl fullHD:text-4xl 2k:text-6xl 4k:text-7xl font-titles text-beige">
            services
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LandingLeftSide;
