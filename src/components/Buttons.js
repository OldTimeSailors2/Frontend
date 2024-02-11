"use client";

import Link from "next/link";
import Image from "next/image";
import ala from "../../public/assets/alita.svg";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Buttons = () => {
  return (
    <>
      <div className="flex flex-col gap-3 xl:gap-2 1xxl:gap-3.5 2k:gap-5 4k:gap-7 mt-5 xl:mt-1.5 2k:mt-5 4k:mt-7 mr-2 4k:mr-4">
        <Link
          className="octagon flex items-center justify-center bg-beigePattern bg-contain"
          href="/media"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-darkBlue">
            media
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-bluePattern bg-contain"
          href="/tickets"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-lightRed">
            tickets
          </p>
        </Link>
        
        <Link
          className="octagon flex items-center justify-center bg-redPattern bg-contain"
          href="/services"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-beige">
            services
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-bluePattern bg-contain"
          href="/reviews"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-beige">
            reviews
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-beigePattern bg-contain"
          href="/our-clients"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl tracking-wides font-titles font-medium text-lightRed">
            our clients
          </p>
        </Link>
      </div>
    </>
  );
};

const BlurbButton = () => {
  return (
    <>
      <div className="mt-1 xs:mt-2 1xxl:mt-2 2k:mt-3 4k:mt-4 flex justify-center xl:justify-between w-full">
        <Image
          src={ala}
          width={35}
          height={35}
          alt="ala"
          className="mirror xs2:w-[44px] md1:w-[28px] min-[820px]:w-[35px] lg:w-[54px]  xl:w-[40px] xl:h-auto  1xl:w-[40px] 1xxl:w-[45px] fullHD:w-[55px] 2k:w-[75px] 4k:w-[120px]"
        />
        <Link
          className=" text-darkBlue bg-lightRed font-bold xl:font-medium font-titles rounded-md 1xxl:rounded-lg  xs2:text-xl md1:text-lg min-[820px]:text-xl lg:text-3xl xl:text-base 1xl:text-lg 1xxl:text-2xl fullHD:text-3xl 2k:text-4xl 4k:text-6xl  text-center px-1 xs2:px-1.5 md1:px-1 xl:px-2 4k:px-3"
          href="/"
        >
          blurb
        </Link>
        <Image
          src={ala}
          width={35}
          height={35}
          alt="ala"
          className="xs2:w-[44px] md1:w-[28px] min-[820px]:w-[35px] lg:w-[54px]   xl:w-[40px] xl:h-auto 1xl:w-[40px]  1xxl:w-[45px] fullHD:w-[55px] 2k:w-[75px] 4k:w-[120px]"
        />
      </div>
    </>
  );
};

const Icons = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 xs2:gap-2.5 min-[820px]:gap-3.5 xl:gap-2.5 fullHD:gap-5 2k:gap-6 4k:gap-9 mt-10 xs:mt-14 xs2:mt-[60px] min-[425px]:mt-20 md1:mt-8 md:mt-3 min-[820px]:mt-7 lg:mt-6 xl:mt-3 1xl:mt-4 1xxl:mt-10 fullHD:mt-7 2k:mt-8 4k:mt-20">
        <Link
          className="bg-beigePattern   bg-contain text-lightRed rounded-full flex justify-center items-center text-[25px] p-1.5 xs2:text-[28px] xs2:p-2 md1:text-[25px] md1:p-1.5  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5  xl:p-1 xl:text-[20px] 1xl:text-[25px] 1xl:p-1.5 1xxl:text-[30px] 1xxl:p-2 fullHD:text-[35px] fullHD:p-2.5 2k:text-[45px] 2k:p-3 4k:text-[75px] 4k:p-5"
          href="https://www.instagram.com/oldtimesailors"
        >
          <FaInstagram />
        </Link>
        <Link
          className="bg-beigePattern  bg-contain text-darkBlue rounded-full flex justify-center items-center text-[25px] p-1.5 xs2:text-[28px] xs2:p-2 md1:text-[25px] md1:p-1.5  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5  xl:p-1 xl:text-[20px] 1xl:text-[25px] 1xl:p-1.5 1xxl:text-[30px] 1xxl:p-2 fullHD:text-[35px] fullHD:p-2.5 2k:text-[45px] 2k:p-3 4k:text-[75px] 4k:p-5"
          href="https://www.facebook.com/oldtimesailors/"
        >
          <FaFacebookF />
        </Link>
        <Link
          className="bg-beigePattern  bg-contain text-darkBlue rounded-full flex justify-center items-center text-[25px] p-1.5 xs2:text-[28px] xs2:p-2 md1:text-[25px] md1:p-1.5  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 xl:p-1 xl:text-[20px] 1xl:text-[25px] 1xl:p-1.5 1xxl:text-[30px] 1xxl:p-2 fullHD:text-[35px] fullHD:p-2.5 2k:text-[45px] 2k:p-3 4k:text-[75px] 4k:p-5"
          href="https://wa.me/447539045312"
        >
          <FaWhatsapp />
        </Link>
        <Link
          className="bg-beigePattern   bg-contain text-lightRed rounded-full flex justify-center items-center text-[25px] p-1.5 xs2:text-[28px] xs2:p-2 md1:text-[25px] md1:p-1.5  min-[810px]:text-[27px] min-[820px]:text-[35px] min-[820px]:p-2 lg:text-[42px] lg:p-2.5 xl:p-1 xl:text-[20px] 1xl:text-[25px] 1xl:p-1.5 1xxl:text-[30px] 1xxl:p-2 fullHD:text-[35px] fullHD:p-2.5 2k:text-[45px] 2k:p-3 4k:text-[75px] 4k:p-5"
          href="mailto:captainnicholasmoffat@oldtimesailors.com"
        >
          <TfiEmail />
        </Link>
      </div>
    </>
  );
};

export { Buttons, BlurbButton, Icons };
