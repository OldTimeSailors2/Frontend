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
    <main className="w-screen h-screen bg-[url('../../public/assets/fondo-01.png')] bg-cover bg-center flex flex-col">
      <div className="w-full h-full p-[17.5px] xl:p-[28px]  2k:p-[52px] 4k:p-[64px] relative">
        <div className="absolute inset-0 image-border pointer-events-none" />

        <div className="w-full h-full flex flex-col justify-between relative">
          

          <div className="flex justify-between ">
            <div className="flex flex-col items-center justify-center  ml-1 md:ml-3.5  min-[810px]:ml-2 min-[820px]:ml-2.5 lg:ml-[18px] fullHD:ml-3 4k:ml-6         mt-[140px] xs:mt-[150px] xs2:mt-[170px] md1:mt-[135px] md:mt-[160px] min-[820px]:mt-[195px] lg:mt-[250px] xl:mt-[170px] 1xxl:mt-[200px] fullHD:mt-[240px] 2k:mt-[310px] 4k:mt-[430px]">
              <Image
                src={textImg}
                width={120}
                height={120}
                alt="Frame"
                className="self-center  xs:w-[130px] xs2:w-[150px] md1:w-[115px]  min-[810px]:w-[125px] min-[820px]:w-[150px] lg:w-[190px] xl:w-[140px] xl:h-auto 1xxl:w-[180px]  fullHD:w-[210px] 2k:w-[280px] 4k:w-[410px]"
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
