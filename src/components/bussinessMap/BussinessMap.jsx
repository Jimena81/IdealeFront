

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './bussinessMap.css';

const BussinessMap = () => {

  const markerPosition = [43.3633806717631, -5.8549607473631875];

  return (
    <MapContainer center={[43.3633806717631, -5.8549607473631875]} zoom={22}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />
      <Marker position={markerPosition}></Marker>
    </MapContainer>
  );
};

export default BussinessMap;








