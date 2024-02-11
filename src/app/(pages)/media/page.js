import MediaWrapper from "@/wrappers/MediaWrapper";
import Image from "next/image";
import MediaCarousel from "@/components/MediaCarousel";
import PhotosDisplay from "@/components/PhotosDisplay";
import VideoPlayer from "@/components/VideoPlayer";
import MusicPlayer from "@/components/MusicPlayer";
import DynamicDecoMedia from "@/components/DynamicDecoMedia";

export const metadata = {
  title: "Media",
  description: "Get to know us",
  openGraph: {
    title: "Media",
    description: "Get to know us",
  },
};

const fetchMediaData = async () => {
  try {
    const [photosRes, videosRes, songsRes] = await Promise.all([
      fetch(`${process.env.BACKEND_API}/media-photo?populate=*`),
      fetch(`${process.env.BACKEND_API}/media-videos?populate=*`),
      fetch(`${process.env.BACKEND_API}/media-songs?populate=*`),
    ]);

    [photosRes, videosRes, songsRes].forEach((res, index) => {
      if (!res.ok) {
        throw new Error(
          `Failed to fetch ${["photos", "videos", "songs"][index]}: ${res.status} ${res.statusText}`,
        );
      }
    });

    const photos = await photosRes.json();
    const videos = await videosRes.json();
    const songs = await songsRes.json();

    const formatPhotos = (photosApiResponse) => {
      return photosApiResponse.data.attributes.photos.data.map((photo) => ({
        id: photo.id,

        urls: photo.attributes.formats,
      }));
    };

    const formatVideos = (videosApiResponse) => {
      return videosApiResponse.data.map((video) => ({
        id: video.id,
        url: video.attributes.video.data.attributes.url,
        thumbnail:
          video.attributes.thumbnail.data.attributes.formats.thumbnail.url,
        thumbnailStory: video.attributes.thumbnailStory,
      }));
    };

    const formatSongs = (songsApiResponse) => {
      return songsApiResponse.data.map((song) => ({
        id: song.id,
        title: song.attributes.title,
        url: song.attributes.song.data.attributes.url,
      }));
    };

    const formattedSongs = formatSongs(songs);
    const formattedVideos = formatVideos(videos);
    const formattedPhotos = formatPhotos(photos);

    return { formattedSongs, formattedVideos, formattedPhotos };
  } catch (error) {
    console.error("Error fetching media data:", error);

    throw new Error(`Data fetching error: ${error.message}`);
  }
};

const Media = async () => {
  const { formattedSongs, formattedVideos, formattedPhotos } =
    await fetchMediaData();

  return (
    <>
      <main
        className="bg-bluePatternMobile md1:bg-bluePatternTablet xl:bg-bluePattern  bg-contain  w-screen h-screen flex flex-col pt-[77px] xs:pt-[92px] sm:pt-[140px] 2xl:pt-[172px] 2k:pt-[204px] 4k:pt-[268px]
          pb-[36px] md:pb-[44px] 2k:pb-[52px] 4k:pb-[64px] max-xs:justify-evenly justify-around xl:justify-evenly 1xl:justify-start 1xl:gap-3 1xxl:gap-8 2k:gap-0 2k:justify-around"
      >
        <MediaWrapper
          songs={formattedSongs}
          videos={formattedVideos}
          photos={formattedPhotos}
        >
          <section className="w-full flex flex-col gap-2 1xl:mt-3 1xxl:mt-5 2k:mt-0">
            <div className="flex gap-2 items-center px-2 sm:px-6 2k:mb-3">
              <Image
                src="/assets/media-deco-1.svg"
                width={35}
                height={35}
                alt="Decoration"
                className="md:w-[45px] 2xl:w-[65px] 2k:w-[80px] 4k:w-[110px]"
              />
              <h1 className="font-titles text-lightRed text-3xl sm:text-4xl min-[900px]:text-5xl xl:text-3xl 1xxl:text-4xl 2xl:text-[42px] 2k:text-[54px] 4k:text-7xl">
                music
              </h1>
              <DynamicDecoMedia />
            </div>
            <MediaCarousel mediaType="song" />
            <MusicPlayer />
          </section>

          <section className="w-full flex flex-col gap-3">
            <div className="flex gap-2 items-center px-2 sm:px-6 2k:mb-3">
              <Image
                src="/assets/media-deco-1.svg"
                width={35}
                height={35}
                alt="Decoration"
                className="md:w-[45px] 2xl:w-[65px] 2k:w-[80px] 4k:w-[110px]"
              />
              <h1 className="font-titles text-lightRed text-3xl sm:text-4xl min-[900px]:text-5xl xl:text-3xl 1xxl:text-4xl 2xl:text-[42px] 2k:text-[54px] 4k:text-7xl">
                videos
              </h1>
              <DynamicDecoMedia />
            </div>

            <MediaCarousel mediaType="video" />
            <VideoPlayer />
          </section>

          <section className="w-full flex flex-col gap-3">
            <div className="flex gap-2 items-center px-2 sm:px-6 2k:mb-3">
              <Image
                src="/assets/media-deco-1.svg"
                width={35}
                height={35}
                alt="Decoration"
                className="md:w-[45px] 2xl:w-[65px] 2k:w-[80px] 4k:w-[110px]"
              />
              <h1 className="font-titles text-lightRed text-3xl sm:text-4xl min-[900px]:text-5xl xl:text-3xl 1xxl:text-4xl 2xl:text-[42px] 2k:text-[54px] 4k:text-7xl">
                photos
              </h1>
              <DynamicDecoMedia />
            </div>
            <MediaCarousel mediaType="photo" />
            <PhotosDisplay />
          </section>
        </MediaWrapper>
      </main>
    </>
  );
};

export default Media;
