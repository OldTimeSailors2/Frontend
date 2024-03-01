"use client"

import { useState } from "react"
import useBrowserDetection from "@/hooks/useBrowserDetection"

const LandingDynamicBg = () => {
  const { isSafari } = useBrowserDetection()
  const [isSafariLoaded, setIsSafariLoaded ] = useState(false)

  return (
    <>
      {!isSafariLoaded && (
        <div className="absolute inset-0 bg-darkBlue"/>
      )}
      <div
        className={`absolute inset-0
          bg-[url('/assets/backgrounds/fondo-02.webp')] xl:bg-[url('/assets/backgrounds/fondo-01.webp')] bg-cover
          md1:scale-150 lg:scale-[1.75] xl:scale-y-[1.35] xl:scale-x-[1.25] 1xl:scale-y-[1.4] 1xl:scale-x-[1.4] 1xxl:scale-[1.3]
          md1:-translate-y-60 lg:-translate-y-[30%] xl:-translate-y-[7.25rem] 1xl:-translate-y-[8rem] 1xxl:-translate-y-28 fullHD:-translate-y-36 4k:-translate-y-72
          md1:-translate-x-14 lg:-translate-x-24 xl:-translate-x-6 1xxl:-translate-x-6
          ${isSafari 
            ? "scale-y-[1.3] scale-x-[1.1] -translate-y-[12%] xs:max-xs2:scale-y-[1.3] xs:max-xs2:-translate-y-[13%]"
            : "scale-[1.2] -translate-y-[4%] xs:-translate-y-[6%] xl:scale-150 xl:translate-x-0 xl:translate-y-0"
          }`}
        onLoad={() => setIsSafariLoaded(true)}
      />
    </>
  )
}

export default LandingDynamicBg