import React, {FC} from "react";
import { TileLayer, Marker, Popup } from 'react-leaflet'
import { MapWrapper, MapComponent, Image, FlexRow, PopUpText } from './MapStyle'

interface MapInterface {
    image: {
        source: string,
        latitude: number,
        longitude: number
    }
}
const Map: FC<MapInterface> = ({ image }) => {
    let src = image.source
    let coordinates: [number, number] = [image.latitude, image.longitude]
    return (
        <MapWrapper>
        <MapComponent center={coordinates} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
          />
          {src !== "img" && 
          <Marker position={coordinates}>
            <Popup>
              <FlexRow><Image src={src} alt="Loading failed"/><div><PopUpText>Coordinates:</PopUpText><PopUpText>{coordinates[0]}</PopUpText><PopUpText> {coordinates[1]}</PopUpText></div></FlexRow>
            </Popup>
          </Marker> }
          
        </MapComponent>
      </MapWrapper>
    )
}

export default Map
