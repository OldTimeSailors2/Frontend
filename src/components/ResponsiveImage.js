"use client";

import Image from "next/image";
import desktopImage from "public/assets/clients-desktop.svg";
import mobileImage from "public/assets/clients-mobile.svg";
import { useEffect, useState } from "react";

const ResponsiveImage = () => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 1280);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-full">
      {isDesktopOrLaptop ? (
        <Image
          src={desktopImage}
          quality={100}
          priority={true}
          alt="our clients"
          sizes="100vw"
          fill
          className="object-contain flex items-center justify-center py-3"
        />
      ) : (
        <Image
          src={mobileImage}
          quality={100}
          priority={true}
          alt="our clients"
          sizes="100vw"
          fill
          className="object-contain flex items-center justify-center px-2"
        />
      )}
    </div>
  );
};

export default ResponsiveImage;
