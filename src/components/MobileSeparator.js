"use client";

import { useRef, useState, useEffect } from "react";

const MobileSeparator = ({ children }) => {
  const contentRef = useRef(null);
  const [separatorHeight, setSeparatorHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setSeparatorHeight(`${contentRef.current.offsetHeight}px`);
    }
  }, [children]);

  return (
    <>
      <img
        src="/assets/reviews-line-mobile.svg"
        style={{ height: separatorHeight }}
        className="w-auto object-cover mx-0.5 xl:hidden"
        alt="Reviews decoration"
      />

      <div className="overflow-auto xl:w-1/3 xl:flex" ref={contentRef}>
        {children}
      </div>

      <img
        src="/assets/reviews-line-mobile.svg"
        style={{ height: separatorHeight }}
        className="w-auto object-cover mx-0.5 xl:hidden"
        alt="Reviews decoration"
      />
    </>
  );
};

export default MobileSeparator;
