"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/system";
import { LoaderProvider } from "@/context/LoaderContext";
<<<<<<< HEAD
=======
import { NavbarColorProvider } from "@/context/NavbarColorProvider";
>>>>>>> 94d6d9c (Integracion de pixel, correccion de diseño y landing de eventos)

const PagesWrapper = ({ children }) => {
  return (
    <NextUIProvider>
      <LoaderProvider>
<<<<<<< HEAD
        <Navbar />
        {children}
        <Footer />
=======
        <NavbarColorProvider>
          <Navbar/>
          {children}
          <Footer />
        </NavbarColorProvider>
>>>>>>> 94d6d9c (Integracion de pixel, correccion de diseño y landing de eventos)
      </LoaderProvider>
    </NextUIProvider>
  );
};

export default PagesWrapper;
