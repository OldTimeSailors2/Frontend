"use client";

import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/system";

const LandingWrapper = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default LandingWrapper;
