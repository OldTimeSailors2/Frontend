"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/system";
import { LoaderProvider } from "@/context/LoaderContext";

const PagesWrapper = ({ children }) => {
  return (
    <NextUIProvider>
      <LoaderProvider>
        <Navbar />
        {children}
        <Footer />
      </LoaderProvider>
    </NextUIProvider>
  );
};

export default PagesWrapper;
