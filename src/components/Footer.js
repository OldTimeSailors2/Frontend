"use client";

import { usePathname } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isFooterBlack, setIsFooterBlack] = useState(false);
  const pathname = usePathname();
  const defaultSettings = { loader: 1, photos: true };
  const settings = useLoader() || defaultSettings;

  useEffect(() => {
    if (pathname === "/tickets" || pathname === "/services") {
      setIsFooterBlack(true);
    } else setIsFooterBlack(false);
  }, [pathname]);
  return (
    <footer
      className={`fixed bottom-0 w-screen flex justify-center items-center  ${pathname === "/" ? "py-0.5 xl:p-0.5 2k:py-2" : "py-0.5 md1:py-2"}`}
      style={{
        opacity: settings?.loader,
        pointerEvents: settings?.photos ? "auto" : "none",
      }}
    >
      <p
        className={`${isFooterBlack ? "text-black" : "text-beige"} font-txt text-[9px] md1:text-lg md:text-xl xl:text-base 2k:text-3xl 4k:text-5xl uppercase `}
      >
        OLD TIME SAILORS LTD.®
      </p>
    </footer>
  );
};

export default Footer;
