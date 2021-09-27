import { FC } from "react";
import { useMap } from "react-leaflet";

interface ChangeMapPositionInterface {
  coordinates: [number, number];
}

const ChangeMapPosition: FC<ChangeMapPositionInterface> = ({ coordinates }) => {
  const map = useMap();
  map.setView(coordinates, 5);
  return null;
};

export default ChangeMapPosition;
