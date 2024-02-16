import ResponsiveImage from "@/components/ResponsiveImage";

export const metadata = {
  title: "Our Clients",
  description: "Who we work with",
  openGraph: {
    title: "Our Clients",
    description: "Who we work with",
  },
};

const OurClients = () => {
  return (
    <div className="w-screen h-dvh bg-bluePatternMobile md1:bg-bluePatternTablet xl:bg-bluePattern bg-contain pt-[77px] xs:pt-[92px] sm:pt-[140px] 2xl:pt-[172px] 2k:pt-[204px] 4k:pt-[268px] pb-[36px] 2k:pb-[52px] 4k:pb-[64px]">
      <ResponsiveImage />
    </div>
  );
};

export default OurClients;
