import Image from "next/image";
import { Buttons, BlurbButton, Icons } from "@/components/Buttons";
import LandingDisplay from "@/components/LandingDisplay";
import logo from "../../../public/assets/logo.svg";
import textImg from "../../../public/assets/cuadrado.svg";

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

    // bg-[url('../../public/assets/fondo-01.png')] bg-cover bg-center
    <main className="w-screen h-dvh bg-lime-600 flex flex-col">
      <div className="w-full h-full p-[17.5px] xl:p-[28px]  2k:p-[52px] 4k:p-[64px] relative">
        <div className="absolute inset-0 image-border pointer-events-none" />

        <div className="w-full h-full flex flex-col justify-between relative">
          
        <Image
            src={logo}
            width={140}
            height={140}
            priority={true}
            alt="OTS Logo"
            className="absolute -top-3 -left-2.5 xs:-top-3.5 xs:-left-3 xs2:-top-4 md1:-left-3.5  xl:-top-7 xl:-left-2  fullHD:-left-[14px] 2k:-top-12 2k:-left-6 4k:-top-14 4k:-left-2      xs:w-[150px] xs:h-[150px] xs2:w-[170px] xs2:h-[170px] md1:w-[150px] md1:h-[150px] md:w-[170px] md:h-[170px]  min-[820px]:w-[200px]  min-[820px]:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[140px] xl:h-[140px] 1xxl:w-[160px] 1xxl:h-[160px]  fullHD:w-[210px] fullHD:h-[210px] 2k:w-[350px] 2k:h-[350px] 4k:w-[430px] 4k:h-[430px]"
          />

          <div className="flex justify-between ">
            <div className="flex flex-col items-center justify-center  ml-1 md:ml-3.5  min-[810px]:ml-2 min-[820px]:ml-2.5 lg:ml-[18px] xl:ml-4 fullHD:ml-4 4k:ml-14         mt-[140px] xs:mt-[150px] xs2:mt-[170px] md1:mt-[135px] md:mt-[160px] min-[820px]:mt-[195px] lg:mt-[250px] xl:mt-[120px] 1xl:mt-[115px] 1xxl:mt-[135px]  fullHD:mt-[190px] 2k:mt-[310px] 4k:mt-[390px]">
              <Image
                src={textImg}
                width={110}
                height={110}
                alt="Text image"
                className="self-center  xs:w-[120px] xs2:w-[140px] md1:w-[115px]  min-[810px]:w-[125px] min-[820px]:w-[150px] lg:w-[190px] xl:w-[90px] xl:h-auto 1xxl:w-[110px] fullHD:w-[150px] 2k:w-[280px] 4k:w-[300px]"
              />
              <BlurbButton />
              <Icons />

            </div>

            <Buttons />
          </div>

          <LandingDisplay images={formattedLandingImages} />
        </div>
      </div>
    </main>
  );
};

export default Home;
