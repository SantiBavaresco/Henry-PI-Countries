import React, { useEffect } from 'react';

function FranceBorderMap() {
  useEffect(() => {
    // Create a new map object centered on France
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 46.2276, lng: 2.2137},
      zoom: 6
    });

    // Load the GeoJSON data for the border of France
    const franceBorder = new window.google.maps.Data();
    franceBorder.loadGeoJson('https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson');

    // Add the border to the map
    franceBorder.setMap(map);
  }, []);

  return (
    <div id="map" style={{ height: '100vh' }}></div>
  );
}

function loadScript(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

class MapLoader extends React.Component {
  componentDidMount() {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCiaBwsIYOlBZ12Sn_gxp8O-c_mIQ3j3D8`, () => {
      this.forceUpdate();
    });
  }

  render() {
    if (typeof window.google === 'undefined') {
      return null;
    }

    return <FranceBorderMap />;
  }
}

export default MapLoader;
