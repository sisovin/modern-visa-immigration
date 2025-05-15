import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    };

    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Custom Marker',
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: '<div><h2>Custom Marker</h2><p>This is a custom marker.</p><a href="https://www.google.com/maps/dir/?api=1&destination=-34.397,150.644" target="_blank">Get Directions</a></div>',
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;
