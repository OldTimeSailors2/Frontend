"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import logo2 from "../../public/assets/logo-services.svg"
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [titleBg, setTitleBg] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [navStyle, setNavStyle] = useState({});

  const getBackgroundColor = (path) => {
    if (path === "/media") {
      return "rgba(35, 48, 64, 0.8)";
    } else if (path === "/reviews") {
      return "rgba(221, 50, 84, 0.8)";
    } else return "transparent";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavStyle({
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          backgroundColor: getBackgroundColor(pathname),
          transition: "background-color 0.3s, box-shadow 0.3s",
        });
      } else {
        setNavStyle({});
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    switch (pathname) {
      case "/tickets":
        setTitle("tickets");
        setTitleBg("bluePattern");
        setTitleColor("lightRed");
        break;
      case "/reviews":
        setTitle("reviews");
        setTitleBg("bluePattern");
        setTitleColor("beige");
        break;
      case "/media":
        setTitle("media");
        setTitleBg("beigePattern");
        setTitleColor("darkBlue");
        break;
      case "/our-clients":
        setTitle("our clients");
        setTitleBg("beigePattern");
        setTitleColor("lightRed");
        break;
      case "/services":
        setTitle("services");
        setTitleBg("redPattern");
        setTitleColor("beige");
        break;
      default:
        setTitle("reviews");
        setTitleBg("bluePattern");
        setTitleColor("beige");
        break;
    }
  }, [pathname]);
  return (
    <div
      style={navStyle}
      className="fixed w-screen z-[100] flex justify-between pt-3 px-1 sm:px-4 "
    >
      <div className="flex gap-1.5 sm:gap-4 items-center">
        <Link href="/" className="inline-block">
          <Image
            src={pathname !== '/services' ? logo : logo2}
            width={65}
            height={65}
            priority={true}
            alt="OTS Logo"
            className="xs:w-[80px] xs:h-[80px] sm:w-32 sm:h-32 2xl:w-40 2xl:h-40 2k:w-48 2k:h-48 4k:w-64 4k:h-64"
          />
        </Link>
        <h1
          className={`octagon-navbar bg-${titleBg} bg-contain text-${titleColor} font-titles text-2xl xs:text-[26px] sm:text-[40px] 2xl:text-5xl 2k:text-7xl 4k:text-8xl flex items-center justify-center`}
        >
          {title}
        </h1>
      </div>

      <div className="flex gap-1.5 xs:gap-2 sm:gap-4 items-center">
        <Link
          className={`${pathname === "/tickets" || pathname === "/services" ? "bg-redPattern text-beige" : "bg-beigePattern text-lightRed"}
                                bg-contain rounded-full p-1 sm:p-2 2k:p-3 4k:p-3.5`}
          href="mailto:captainnicholasmoffat@oldtimesailors.com"
          target="_blank"
        >
          <TfiEmail
            size={18}
            className="xs:w-[20px] xs:h-[20px] sm:w-[30px] sm:h-[30px] 2k:w-[50px] 2k:h-[50px]  4k:w-[60px] 4k:h-[60px]"
          />
        </Link>

        <Link
          className={`${pathname === "/tickets" || pathname === "/services" ? "bg-bluePattern text-beige" : "bg-beigePattern text-darkBlue"}
                                bg-contain rounded-full p-1 sm:p-2 2k:p-3 4k:p-3.5`}
          href="https://wa.me/447539045312"
          target="_blank"
        >
          <FaWhatsapp
            size={18}
            className="xs:w-[20px] xs:h-[20px] sm:w-[30px] sm:h-[30px] 2k:w-[50px] 2k:h-[50px] 4k:w-[60px] 4k:h-[60px]"
          />
        </Link>

        <Link
          className={`${pathname === "/tickets" || pathname === "/services" ? "bg-redPattern text-beige" : "bg-beigePattern text-lightRed"}
                                bg-contain rounded-full p-1 sm:p-2 2k:p-3 4k:p-3.5`}
          href="https://www.instagram.com/oldtimesailors"
          target="_blank"
        >
          <FaInstagram
            size={18}
            className="xs:w-[20px] xs:h-[20px] sm:w-[30px] sm:h-[30px] 2k:w-[50px] 2k:h-[50px] 4k:w-[60px] 4k:h-[60px]"
          />
        </Link>

        <Link
          className={`${pathname === "/tickets" || pathname === "/services" ? "bg-bluePattern text-beige" : "bg-beigePattern text-darkBlue"}
                                bg-contain rounded-full p-1 sm:p-2 2k:p-3 4k:p-3.5`}
          href="https://www.facebook.com/oldtimesailors/"
          target="_blank"
        >
          <FaFacebookF
            size={18}
            className="xs:w-[20px] xs:h-[20px] sm:w-[30px] sm:h-[30px] 2k:w-[50px] 2k:h-[50px] 4k:w-[60px] 4k:h-[60px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
