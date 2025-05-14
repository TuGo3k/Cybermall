"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { IoMdClose } from "react-icons/io";
// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/6615/6615039.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function LocationSelector({ location, setLocation, close }) {
  const getLocation = () => {
    if (typeof window !== "undefined") {
      if (!navigator.geolocation) {
        alert("Таны браузер байршил авахыг дэмжихгүй байна.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: parseFloat(position.coords.latitude.toFixed(6)), // Number болгох
            longitude: parseFloat(position.coords.longitude.toFixed(6)), // Number болгох
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("Та байршил авах зөвшөөрөл өгөөгүй байна.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Байршлын мэдээлэл олдсонгүй.");
              break;
            case error.TIMEOUT:
              alert("Байршил авах хугацаа дууссан.");
              break;
            default:
              alert("Байршил авахад алдаа гарлаа: " + error.message);
              break;
          }
        }
      );
    }
  };

  return (
    <div className="p-4 m-4 lg:m-0 border rounded-lg shadow-md w-full  max-w-6xl bg-white">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-3">Байршил сонгох</h2>
        <span onClick={() => close()} className="cursor-pointer">
          <IoMdClose />
        </span>
      </div>
      <button
        onClick={getLocation}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Одоо байгаа байршил оруулах
      </button>

      <div className="mt-4 text-sm text-gray-700">
        <p>
          <strong>Өргөрөг:</strong> {location.latitude}
        </p>
        <p>
          <strong>Уртраг:</strong> {location.longitude}
        </p>
      </div>

      <div className="mt-4 h-80 w-full">
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          className="h-80 w-full rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[location.latitude, location.longitude]}
            icon={customIcon}
          />
          <ChangeView center={location} />
          <MapClickHandler setLocation={setLocation} />
        </MapContainer>
      </div>
    </div>
  );
}

function ChangeView({ center }) {
  const map = useMapEvents({});
  useEffect(() => {
    map.setView([center.latitude, center.longitude], 13);
  }, [center, map]);
  return null;
}

function MapClickHandler({ setLocation }) {
  useMapEvents({
    click: (e) => {
      setLocation({
        latitude: parseFloat(e.latlng.lat.toFixed(6)),
        longitude: parseFloat(e.latlng.lng.toFixed(6)),
      });
    },
  });
  return null;
}
// cdn-icons-png.flaticon.com
