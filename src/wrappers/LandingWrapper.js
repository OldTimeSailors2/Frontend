"use client";


import { NextUIProvider } from "@nextui-org/system";

const LandingWrapper = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

export default LandingWrapper;
