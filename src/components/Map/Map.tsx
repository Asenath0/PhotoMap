import React, { FC } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import ChangeMapPosition from "./ChangeMapPosition";
import {
  MapWrapper,
  MapComponent,
  Image,
  FlexRow,
  PopUpText,
} from "./MapStyle";

interface MapInterface {
  currentImage: string;
  coordinates: [number, number];
}
const Map: FC<MapInterface> = ({ currentImage, coordinates }) => {
  return (
    <MapWrapper>
      <MapComponent
        center={[coordinates[0], coordinates[1]]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png" />
        {currentImage !== "" && (
          <Marker position={[coordinates[0], coordinates[1]]}>
            <Popup>
              <FlexRow>
                <Image src={currentImage} alt="Loading failed" />
                <div>
                  <PopUpText>Coordinates:</PopUpText>
                  <PopUpText>{coordinates[0]}</PopUpText>
                  <PopUpText> {coordinates[1]}</PopUpText>
                </div>
              </FlexRow>
            </Popup>
          </Marker>
        )}
        <ChangeMapPosition coordinates={coordinates} />
      </MapComponent>
    </MapWrapper>
  );
};

export default Map;
