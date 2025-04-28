"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

const MapsWrapper = ({ children }) => {
<<<<<<< HEAD
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      {children}
    </APIProvider>
  );
=======
  return <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>{children}</APIProvider>;
>>>>>>> 94d6d9c (Integracion de pixel, correccion de diseño y landing de eventos)
};

export default MapsWrapper;
