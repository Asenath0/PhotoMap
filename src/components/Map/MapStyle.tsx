import styled from 'styled-components'
import { MapContainer } from 'react-leaflet'

export const MapComponent = styled(MapContainer)`
  width: 100%;
  height: 100%;
  
`
export const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  z-index: 0;
`

export const Image = styled.img`
    max-height: 100px;
`
export const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 200px;
`;

export const PopUpText = styled.div`
    margin: 0;
    padding: 0 0.5em;
`