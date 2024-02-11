"use client";

import { useEffect, useState, useCallback, useRef, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useApiIsLoaded,
  Map,
  useMap,
  useMapsLibrary,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import windowLogo from "../../public/assets/logo-badge.svg";
import CustomPopup from "./CustomPopup";
import { CgClose } from "react-icons/cg";

const Maps = ({ markersList }) => {
  const [overlayLoaded, setOverlayLoaded] = useState(false);
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const coreLibrary = useMapsLibrary("core");
  const mapsLibrary = useMapsLibrary("maps");
  const map = useMap("Map");
  const apiIsLoaded = useApiIsLoaded();

  const [mapCenter, setMapCenter] = useState({ lat: 55.97, lng: -3.699966 });
  const [mapZoom, setMapZoom] = useState(6);
  const [markerIconScale, setMarkerIconScale] = useState(6);
  const southWest = { lat: 49.68145071046583, lng: -11.130739548504629 };
  const northEast = { lat: 63.335455022149226, lng: 3.2662026656921217 };

  const breakpoints = [
    {
      min: 0,
      max: 379,
      action: () => {
        setMapCenter({ lat: 56.65, lng: -3.499966 });
        setMapZoom(5.5);
        setMarkerIconScale(4);
      },
    },
    {
      min: 380,
      max: 389,
      action: () => {
        setMapCenter({ lat: 56.35, lng: -3.499966 });
        setMapZoom(5.8);
        setMarkerIconScale(4);
      },
    },
    {
      min: 390,
      max: 399,
      action: () => {
        setMapCenter({ lat: 56.15, lng: -2.899966 });
        setMapZoom(5.8);
        setMarkerIconScale(5);
      },
    },
    {
      min: 400,
      max: 419,
      action: () => {
        setMapCenter({ lat: 55.7, lng: -2.499966 });
        setMapZoom(6);
        setMarkerIconScale(5);
      },
    },
    {
      min: 420,
      max: 559,
      action: () => {
        setMapCenter({ lat: 55.9, lng: -2.499966 });
        setMapZoom(6);
        setMarkerIconScale(5);
      },
    },
    {
      min: 600,
      max: 767,
      action: () => {
        setMapCenter({ lat: 56.3, lng: -3.699966 });
        setMapZoom(6);
        setMarkerIconScale(5);
      },
    },
    {
      min: 768,
      max: 819,
      action: () => {
        setMapCenter({ lat: 55.3, lng: -3.999966 });
        setMapZoom(6.3);
      },
    },
    {
      min: 820,
      max: 1023,
      action: () => {
        setMapCenter({ lat: 55, lng: -3.699966 });
        setMapZoom(6.6);
      },
    },
    {
      min: 1024,
      max: 1279,
      action: () => {
        setMapCenter({ lat: 55, lng: -3.699966 });
        setMapZoom(6.8);
        setMarkerIconScale(8);
      },
    },
    {
      min: 1280,
      max: 1365,
      action: () => {
        setMapCenter({ lat: 54.88, lng: -3.799966 });
        setMapZoom(5.9);
        setMarkerIconScale(4);
      },
    },
    {
      min: 1366,
      max: 1439,
      action: () => {
        setMapCenter({ lat: 54.9, lng: -3.799966 });
        setMapZoom(6);
        setMarkerIconScale(5);
      },
    },
    {
      min: 1440,
      max: 1919,
      action: () => {
        setMapCenter({ lat: 54.93, lng: -3.799966 });
        setMapZoom(6.2);
        setMarkerIconScale(5);
      },
    },
    {
      min: 1920,
      max: 1999,
      action: () => {
        setMapCenter({ lat: 54.8, lng: -3.799966 });
        setMapZoom(6.5);
      },
    },
    {
      min: 2000,
      max: 2999,
      action: () => {
        setMapCenter({ lat: 54.85, lng: -3.799966 });
        setMapZoom(6.9);
        setMarkerIconScale(8);
      },
    },
    {
      min: 3000,
      max: Infinity,
      action: () => {
        setMapCenter({ lat: 54.85, lng: -3.799966 });
        setMapZoom(7.5);
        setMarkerIconScale(13);
      },
    },

    // Add more breakpoints as needed
  ];

  const updateMapSettings = () => {
    const width = window.innerWidth;
    const breakpoint = breakpoints.find(
      (bp) => width >= bp.min && width <= bp.max,
    );
    if (breakpoint) breakpoint.action();
  };

  // Set up resize listener and initial settings
  useEffect(() => {
    updateMapSettings(); // Set initial values on component mount
    window.addEventListener("resize", updateMapSettings);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateMapSettings);
    };
  }, []);

  useEffect(() => {
    if (!apiIsLoaded || !map || !coreLibrary || !mapsLibrary) return;

    const southWestLatLng = new coreLibrary.LatLng(
      southWest.lat,
      southWest.lng,
    );
    const northEastLatLng = new coreLibrary.LatLng(
      northEast.lat,
      northEast.lng,
    );
    const bounds = new coreLibrary.LatLngBounds(
      southWestLatLng,
      northEastLatLng,
    );
    const imageUrl = "/assets/MapaNuevo12.png";
    const overlayOptions = { clickable: false };
    console.log("Bounds", southWestLatLng, northEastLatLng);

    const overlay = new mapsLibrary.GroundOverlay(
      imageUrl,
      bounds,
      overlayOptions,
    );
    overlay.setMap(map);

    overlay.setOpacity(1);
    setOverlayLoaded(true);
  }, [apiIsLoaded, map, coreLibrary, mapsLibrary, southWest, northEast]);

  const handleMarkerClick = (id) => {
    if (activeMarkerId && activeMarkerId !== id) {
      setIsTransitioning(true);

      setActiveMarkerId(id);
    } else {
      setIsTransitioning(false);
      setActiveMarkerId(id);
    }
  };

  const createPopupContent = (markerData) => (
    <div className="popup-bubble">
      <div className="flex items-center justify-center py-4 px-2 border-r-3 border-dashed border-[#354557]">
        <Image
          src={windowLogo}
          height={50}
          width={50}
          alt="Old Time Sailors Tickets Logo"
          className="md:w-[70px]"
        />
      </div>

      <div className="flex flex-col mt-3 mb-2 px-4 items-center gap-3 w-full">
        <button
          className="absolute top-0 right-0 pt-0.5 pr-0.5"
          onClick={() => setActiveMarkerId(null)}
        >
          <CgClose className="text-[20px] text-[#232f3f] " />
        </button>

        <ul className="self-start -space-y-1">
          <li className="text-2xl md:text-3xl text-lightRed font-titles font-medium flex items-end">
            event:
            <p className="text-[22px] md:text-[28px] text-darkBlue font-txt pl-1 whitespace-nowrap">
              {markerData.event}
            </p>
          </li>
          <li className="text-2xl md:text-3xl text-lightRed font-titles font-medium flex items-end">
            location:
            <p className="text-[22px] md:text-[28px] text-darkBlue font-txt pl-1 whitespace-nowrap">
              {markerData.location}
            </p>
          </li>
          <li className="text-2xl md:text-3xl text-lightRed font-titles font-medium flex items-end">
            date:
            <p className="text-[22px] md:text-[28px] text-darkBlue font-txt pl-1 whitespace-nowrap">
              {markerData.date}
            </p>
          </li>
        </ul>
        <Link
          className="octagon-tickets flex items-center justify-center bg-darkBlue"
          href={markerData.ticketsURL}
        >
          <p className="text-center text-4xl md:text-[42px] font-titles text-lightRed">
            tickets
          </p>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="h-screen">
      <Map
        zoom={mapZoom}
        center={mapCenter}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        id={"Map"}
      >
        {coreLibrary &&
          markersList.map((m) => (
            <Fragment key={m.id}>
              <Marker
                position={m.markerPosition}
                onClick={() => handleMarkerClick(m.id)}
                icon={{
                  path: coreLibrary.SymbolPath.CIRCLE,
                  fillColor: "#dd3254",
                  fillOpacity: 1.0,
                  scale: markerIconScale,
                  strokeColor: "#dd3254",
                  strokeWeight: 0.5,
                }}
              />

              <CustomPopup
                position={m.markerPosition}
                isVisible={activeMarkerId === m.id}
                isTransitioning={isTransitioning}
              >
                {createPopupContent(m)}
              </CustomPopup>
            </Fragment>
          ))}
      </Map>
    </div>
  );
};

export default Maps;
