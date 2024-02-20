import Image from "next/image";
import Link from "next/link";
import LandingLeftSide from "@/components/LandingLeftSide";
import LandingDisplay from "@/components/LandingDisplay";
import logo from "../../../public/assets/logo.svg";


const formatLandingImages = (landingImagesApiResponse) => {
  const photosData = landingImagesApiResponse.data.attributes.photos.data;

  return photosData.map((photo) => ({
    id: photo.id,

    urls: photo.attributes.formats,
  }));
};

const fetchLandingImages = async () => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API}/landing-image?populate=*`,
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch landing images: ${res.status} ${res.statusText}`,
      );
    }
    const landingImages = await res.json();
    const formattedLandingImages = formatLandingImages(landingImages);

    return formattedLandingImages;
  } catch (error) {
    console.error("Error fetching landing images:", error);
    throw error;
  }
};

const Home = async () => {
  const formattedLandingImages = await fetchLandingImages();

  return (

    <main className="w-screen h-dvh bg-[url('../../public/assets/fondo-02.png')] xl:bg-[url('../../public/assets/fondo-01.png')] bg-contain flex flex-col">
      <div className="w-full h-full p-[17.5px] xl:p-[28px]  2k:p-[52px] 4k:p-[64px] relative">
        <div className="absolute inset-0 image-border pointer-events-none" />

        <div className="w-full h-full flex flex-col justify-between relative">
          
        <Image
            src={logo}
            width={110}
            height={110}
            priority={true}
            alt="OTS Logo"
            className="absolute -top-3 -left-1.5 xs2:-top-4 md1:-left-3.5  xl:-top-7 xl:-left-2  fullHD:-left-[14px] 2k:-top-12 2k:-left-6 4k:-top-14 4k:-left-2      xs:w-[120px] xs:h-[120px] xs2:w-[130px] xs2:h-[130px] md1:w-[150px] md1:h-[150px] md:w-[170px] md:h-[170px]  min-[820px]:w-[200px]  min-[820px]:h-[200px] lg:w-[230px] lg:h-[230px] xl:w-[140px] xl:h-[140px] 1xxl:w-[160px] 1xxl:h-[160px]  fullHD:w-[210px] fullHD:h-[210px] 2k:w-[350px] 2k:h-[350px] 4k:w-[430px] 4k:h-[430px]"
          />

          <div className="flex justify-between ">
            
            <LandingLeftSide />

          {/* Pages Buttons */}
          <div className="flex flex-col gap-2 md1:gap-3 xl:gap-2 1xxl:gap-3.5 min-[1536px]:gap-2 fullHD:gap-3.5 2k:gap-5 4k:gap-7 mt-5 md1:mt-8 min-[820px]:mt-10 lg:mt-11 xl:mt-1.5 2k:mt-5 4k:mt-7      mr-2 md1:mr-6 min-[820px]:mr-10 lg:mr-11 4k:mr-4">
        <Link
          className="octagon flex items-center justify-center bg-beigePattern bg-contain"
          href="/media"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-darkBlue">
            media
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-bluePattern bg-contain"
          href="/tickets"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-lightRed">
            tickets
          </p>
        </Link>
        
        <Link
          className="octagon flex items-center justify-center bg-redPattern bg-contain"
          href="/services"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-beige">
            services
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-bluePattern bg-contain"
          href="/reviews"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl font-titles text-beige">
            reviews
          </p>
        </Link>

        <Link
          className="octagon flex items-center justify-center bg-beigePattern bg-contain"
          href="/our-clients"
        >
          <p className="text-center text-xl pb-[1px] xs:text-2xl xs:pb-0 xs2:text-[26px] md1:text-3xl min-[810px]:text-[32px] min-[820px]:text-4xl lg:text-5xl xl:text-3xl xl:pb-0 1xxl:text-4xl fullHD:text-5xl 2k:text-6xl 4k:text-8xl tracking-wides font-titles font-medium text-lightRed">
            our clients
          </p>
        </Link>
          </div>
          {/* Pages Buttons End */}

          </div>

          <LandingDisplay images={formattedLandingImages} />
        </div>
      </div>
    </main>
  );
};

export default Home;
