"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/system";

const PagesWrapper = ({ children }) => {
  return (
    <NextUIProvider>
      <Navbar />
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default PagesWrapper;
