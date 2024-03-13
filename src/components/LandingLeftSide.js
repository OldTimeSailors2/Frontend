"use client"


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import wing from "../../public/assets/wing.svg";
import descriptionImage from "../../public/assets/description.svg";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import useBrowserDetection from "@/hooks/useBrowserDetection";




const LandingLeftSide = () => {

  const { isSafari } = useBrowserDetection()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalComponent, setModalComponent] = useState(null);

  const handleClick = async () => {
    if (!ModalComponent) {
      const Modal = await import('@nextui-org/modal').then(mod => mod.Modal);
      const ModalContent = await import('@nextui-org/modal').then(mod => mod.ModalContent);
      const ModalHeader = await import('@nextui-org/modal').then(mod => mod.ModalHeader);
      const ModalBody = await import('@nextui-org/modal').then(mod => mod.ModalBody);
      setModalComponent({ Modal, ModalContent, ModalHeader, ModalBody });
    }
    setIsModalOpen(true);
  };
  
  

  return (
    <div className={`flex flex-col items-center justify-center   xl:ml-4 1xl:ml-[1.15rem] min-[1536px]:ml-3.5 fullHD:ml-4 4k:ml-14   xl:mt-[120px] 1xl:mt-[115px] 1xxl:mt-[135px]  fullHD:mt-[190px] 2k:mt-[310px] 4k:mt-[390px]  ${ isSafari
     ? " ml-1  md1:ml-1.5  min-[810px]:ml-[1.15rem] min-[820px]:ml-6 lg:ml-7 xl:ml-4 fullHD:ml-4 4k:ml-14          mt-[7.75rem] iphone-1:mt-[8.35rem] iphone-2:mt-[9rem] md1:mt-[135px] md:mt-[160px] min-[820px]:mt-[195px] lg:mt-[220px]" 
     
     : "ml-2 md:ml-3.5 min-[810px]:ml-2 min-[820px]:ml-2.5 lg:ml-[18px]     mt-[102px] xs:mt-[112px] xs2:mt-[122px] md1:mt-[135px] md:mt-[160px] min-[820px]:mt-[195px] lg:mt-[250px] "}`}>
              <Image
                src={descriptionImage}
                width={100}
                height={100}
                alt="Text image"
                className={`self-center xl:w-[90px] xl:h-auto 1xl:w-[85px] 1xxl:w-[110px] fullHD:w-[150px] 2k:w-[280px] 4k:w-[300px] ${ isSafari
                   
                  ? " iphone-1:w-[105px] iphone-2:w-[115px] md1:w-[110px]  min-[810px]:w-[100px] min-[820px]:w-[120px] lg:w-[140px]" 
                  
                  : "xs:w-[90px] xs2:w-[100px] md1:w-[105px] min-[810px]:w-[125px] min-[820px]:w-[150px] lg:w-[190px] "}`}
              />
              {/* BlurbButton */}

    <div className="mt-1 xs:mt-2 xl:mt-1 1xxl:mt-2 2k:mt-3 4k:mt-4 flex justify-center xl:justify-between w-full">
      <div className="w-full h-auto relative">
        <Image
          src={wing}
          fill={true}
          alt="Left wing"
          className="mirror "
          style={{objectFit:'contain'}}
        />
        </div>
        <button
          className={`text-darkBlue bg-lightRed tracking-wide font-titles rounded-md 1xxl:rounded-lg text-center xl:text-[14px] xl:leading-6 1xxl:text-base  fullHD:text-xl 2k:text-4xl 4k:text-5xl   xl:px-1 2k:px-2 2k:py-1 4k:py-1 4k:px-3
           ${ isSafari

             ? "font-medium text-[12px] min-[425px]:text-base md1:text-lg min-[820px]:text-xl lg:text-2xl  px-0.5 iphone-3:px-1 md1:px-1" 
             
             : "font-semibold text-sm xs2:text-base md1:text-lg min-[820px]:text-xl lg:text-3xl   px-1 xs2:px-1.5 md1:px-1"}`}
          
             onClick={() => handleClick()}
        >
          blurb
        </button>
        <div className="w-full h-auto relative">
        <Image
          src={wing}
          style={{objectFit:'contain'}}
          alt="Right wing"
          fill={true}
          
        />
        </div>
      </div>

      {/* BlurbButton End */}

      {/* Social Media Icons */}

      <div className={`grid grid-cols-2 gap-2 xs2:gap-2.5 min-[820px]:gap-3.5 xl:gap-2 fullHD:gap-4 2k:gap-6 4k:gap-9  xl:mt-7 1xl:mt-1.5 1xxl:mt-7  fullHD:mt-4 2k:mt-8 4k:mt-14
      
      ${ isSafari
         ? "mt-10 iphone-1:mt-11 iphone-2:mt-12  min-[430px]:mb-0 md1:mb-0 md1:mt-6 md:mt-3 min-[820px]:mt-5 lg:mt-6"
         
         : "mt-6 xs2:mt-5 min-[425px]:mt-11 md1:mt-4 md:mt-3 min-[820px]:mt-7 lg:mt-6"}`}>



        <Link
          className={`bg-beigePattern   bg-contain text-lightRed rounded-full flex justify-center items-center xl:p-1 xl:text-[25px] 1xl:p-1 1xl:text-[20px] 1xxl:text-[28px] 1xxl:p-1.5 fullHD:text-[32px] 2k:text-[55px] 2k:p-2.5 4k:text-[80px] 4k:p-3.5
          
          ${ isSafari

             ? "text-[20px] p-1 iphone-1:text-[22px] iphone-2:text-[24px] iphone-2:p-[0.3rem] iphone-3:text-[25px] min-[430px]:text-[24px] min-[430px]:p-1 md1:text-[35px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "

              : "text-[25px] p-1.5 md1:text-[30px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "}`}

          href="https://www.instagram.com/oldtimesailors" target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          className={`bg-beigePattern  bg-contain text-darkBlue rounded-full flex justify-center items-center xl:p-1 xl:text-[25px] 1xl:p-1 1xl:text-[20px] 1xxl:text-[28px] 1xxl:p-1.5 fullHD:text-[32px] 2k:text-[55px] 2k:p-2.5 4k:text-[80px] 4k:p-3.5
          
          ${ isSafari

             ? "text-[20px] p-1 iphone-1:text-[22px] iphone-2:text-[24px] iphone-2:p-[0.3rem] iphone-3:text-[25px] min-[430px]:text-[24px] min-[430px]:p-1 md1:text-[35px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "

              : "text-[25px] p-1.5 md1:text-[30px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "}`}

          href="https://www.facebook.com/oldtimesailors/" target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          className={`bg-beigePattern  bg-contain text-darkBlue rounded-full flex justify-center items-center xl:p-1 xl:text-[25px] 1xl:p-1 1xl:text-[20px] 1xxl:text-[28px] 1xxl:p-1.5 fullHD:text-[32px] 2k:text-[55px] 2k:p-2.5 4k:text-[80px] 4k:p-3.5
          
          ${ isSafari

             ? "text-[20px] p-1 iphone-1:text-[22px] iphone-2:text-[24px] iphone-2:p-[0.3rem] iphone-3:text-[25px] min-[430px]:text-[24px] min-[430px]:p-1 md1:text-[35px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "

              : "text-[25px] p-1.5 md1:text-[30px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "}`}

          href="https://wa.me/447539045312" target="_blank"
        >
          <FaWhatsapp />
        </Link>
        <Link
          className={`bg-beigePattern   bg-contain text-lightRed rounded-full flex justify-center items-center xl:p-1 xl:text-[25px] 1xl:p-1 1xl:text-[20px] 1xxl:text-[28px] 1xxl:p-1.5 fullHD:text-[32px] 2k:text-[55px] 2k:p-2.5 4k:text-[80px] 4k:p-3.5
          
          ${ isSafari

             ? "text-[20px] p-1 iphone-1:text-[22px] iphone-2:text-[24px] iphone-2:p-[0.3rem] iphone-3:text-[25px] min-[430px]:text-[24px] min-[430px]:p-1 md1:text-[35px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "

              : "text-[25px] p-1.5 md1:text-[30px] md1:p-1.5  min-[810px]:text-[27px] min-[810px]:p-1.5 min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 "}`}

          href="mailto:captainnicholasmoffat@oldtimesailors.com" target="_blank"
        >
          <TfiEmail />
        </Link>
      </div>

{/* Social Media Icons End */}

{/* Modal */}


{isModalOpen && ModalComponent && (
<ModalComponent.Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
       size="xl" classNames={{base: "bg-beigePattern bg-center bg-cover rounded-3xl xl:rounded-[35px]", 
                              wrapper: "z-[110]",
                              backdrop: "z-[109]",
                              closeButton: "z-[108] text-[2.5rem] text-musicColor hover:bg-[#BFA98C] active:bg-[#B69E7C]",
                            header: "border-none"}}
      backdrop="blur" placement="center"
      >
        <ModalComponent.ModalContent>
              <ModalComponent.ModalHeader className="pb-0 iphone-3:px-7 xl:px-8">
                <Image src="/assets/blurb-title.webp" width={130} height={130} alt="Blurb title" />
              </ModalComponent.ModalHeader>
              <ModalComponent.ModalBody className="pt-0 pb-6 iphone-3:px-7 xl:px-8">
                <p className=" text-darkBlue font-txt font-bold text-justify text-lg leading-[1.35rem] iphone-3:text-xl iphone-3:leading-6 md1:text-xl md2:text-2xl lg:text-3xl xl:text-xl fullHD:text-2xl 2k:text-4xl 4k:text-6xl"> 
                <span className="text-lightRed">Ahoy there!</span> You are invited to board the Sailorette and join the plentiful crew,
                 <span className="text-lightRed"> 'The Old Time Sailors'</span>, for a night of footstomping, dancing and singing! You will be sailing back to the 19th century for an <span className="text-lightRed"> immersive experience </span>
                  of traditional seafaring music performed in a way you have never seen before. The Motley Crew and their plethora of traditional and
                   eclectic instruments will take you back to the time of clashing tankards, and drunken debauchery.
                   <br/> <span className="text-lightRed">Sing and dance along like a drunken </span>
                    sailor as the band perform centuries old folk and shanty songs. Fancy dress is encouraged, so pull out your best seafaring garments me
                     hearties and <span className="text-lightRed">join the festivities</span>
                </p>
              </ModalComponent.ModalBody>
        </ModalComponent.ModalContent>
      </ModalComponent.Modal>
)}


{/* Modal End */}



            </div>
      
    
  );
};



export default LandingLeftSide
