import { getPlaiceholder } from 'plaiceholder';

const fetchAndConvertToBase64 = async (placeholderUrls) => {
  const promises = placeholderUrls.map(async (url) => {
    try {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const { base64 } = await getPlaiceholder(Buffer.from(buffer));
      return base64;
    } catch (error) {
      console.error(`Error fetching or converting image at ${url}:`, error);
      return ''; // Return an empty string or a default placeholder if the fetch or conversion fails
    }
  });
  return Promise.all(promises);
};

const formatPhotos = async (photosApiResponse) => {
  const placeholderUrls = photosApiResponse.data.attributes.photos.data.map(photo => photo.attributes.formats.placeholder.url);
  const base64Strings = await fetchAndConvertToBase64(placeholderUrls);

  return photosApiResponse.data.attributes.photos.data.map((photo, index) => ({
    id: photo.id,
    attributes: photo.attributes,
    blurDataURL: base64Strings[index],
  }));
};

const formatVideos = async (videosApiResponse) => {
  const thumbnailUrls = videosApiResponse.data.map(video => video.attributes.thumbnail.data.attributes.formats.placeholder.url);
  const base64Thumbnails = await fetchAndConvertToBase64(thumbnailUrls);

  return videosApiResponse.data.map((video, index) => ({
    id: video.id,
    url: video.attributes.video.data.attributes.url,
    thumbnail: video.attributes.thumbnail.data.attributes.formats.thumbnail.url,
    thumbnailStory: video.attributes.thumbnailStory,
    blurDataURL: base64Thumbnails[index],
  }));
};

const formatSongs = (songsApiResponse) => {
  return songsApiResponse.data.map((song) => ({
    id: song.id,
    title: song.attributes.title,
    url: song.attributes.song.data.attributes.url,
  }));
};

const formatLandingImages = async (landingImagesApiResponse) => {


  const placeholderUrls = await landingImagesApiResponse.data.attributes.photos.data.map(photo => photo.attributes.formats.placeholder.url);
  const base64Strings = await fetchAndConvertToBase64(placeholderUrls);

  return landingImagesApiResponse.data.attributes.photos.data.map((photo, index) => ({
    id: photo.id,
    attributes: photo.attributes,
    blurDataURL: base64Strings[index],
  }));
};

const formatServices = async (servicesApiResponse) => {
  const servicesWithBlurredImages = await Promise.all(servicesApiResponse.data.map(async (service) => {
    // Extract placeholder URLs for conversion to Base64
    const placeholderUrls = service.attributes.images.data.map(image => image.attributes.formats.placeholder.url);
    
    // Fetch and convert these URLs to Base64 strings
    const base64Strings = await fetchAndConvertToBase64(placeholderUrls);
    
    // Reconstruct each image with the blurDataURL directly inside its attributes
    const imagesWithBlurDataURL = service.attributes.images.data.map((image, index) => ({
      ...image,
      blurDataURL: base64Strings[index],
    }));

    // Return the service object with updated images array
    return {
      id: service.attributes.serviceId,
      paragraph: service.attributes.paragraph,
      images: imagesWithBlurDataURL,
    };
  }));

  return servicesWithBlurredImages;
};


export { formatPhotos, formatVideos, formatSongs, formatLandingImages, formatServices }