import ServicesDisplay from "@/components/ServicesDisplay";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "What we do & offer",
  openGraph: {
    title: "Services",
    description: "What we do & offer",
  },
};

const formatServices = (servicesApiResponse) => {
  return servicesApiResponse.data.map((service) => ({
    id: service.attributes.serviceId,
    images: service.attributes.images.data.map((image) => {
      return image.attributes.formats;
    }),
    paragraph: service.attributes.paragraph,
  }));
};

const fetchServices = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_API}/services?populate=*`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch services: ${res.status} ${res.statusText}`,
      );
    }
    const services = await res.json();
    const formattedServices = formatServices(services);

    return formattedServices;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

const Services = async () => {
  const services = await fetchServices();

  return (
    <main className="h-screen w-screen bg-beigePatternMobile md1:bg-beigePatternTablet xl:bg-beigePattern bg-contain flex flex-col justify-center gap-8 md1:max-xl:gap-24 md:max-md2:gap-14  1xl:items-center 1xl:justify-evenly pt-[77px] xs:pt-[92px] sm:pt-[140px] 2xl:pt-[172px] 2k:pt-[204px] 4k:pt-[268px] pb-[44px] 2k:pb-[52px] 4k:pb-[64px]">
      <ServicesDisplay services={services} />

      <div className="w-full relative flex mt-4 md:max-md3:mt-0">
        <Image
          src="/assets/deco-services-2.svg"
          srcSet="/assets/deco-services-1.svg 1280w"
          width={45}
          height={45}
          className="grow"
          alt="Your Image Description"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <Link href="https://wa.me/447539045312" target="_blank">
            <h2 className="services-octagon-link bg-bluePattern bg-contain underline underline-offset-2 text-beige  text-2xl leading-[39px] xs2:text-3xl xs2:leading-[43px] font-medium tracking-wide  pl-[3.8px] md1:text-[38px] md1:tracking-wide md1:max-xl:pt-1.5 md1:max-xl:pl-1.5 md:text-[44px] md:leading-[48px] lg:text-[55px] lg:leading-[66px] xl:text-3xl  xl:tracking-normal  1xl:text-[27px] fullHD:text-4xl 2k:text-5xl 4k:text-6xl font-titles flex justify-center  xl:items-start  xl:pt-1 fullHD:pt-2 2k:pt-3 4k:pt-4">
              hire our services!
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;
