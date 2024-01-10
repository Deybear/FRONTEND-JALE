import React, { useEffect } from 'react';
import '../styles/Map.css';

function Map(props)
{
    //* - - - </> [CODE] </> - - - *//
    const code = "AIzaSyB2c5znxDZdlf0vvVyOJ9J2oPXdukyGDbo";

    //* - - - </> [DATA] </> - - - *//
    const lat = props.lat;
    const lon = props.lon;

    useEffect(() => {

        window.initMapCallback = () => {
            
            //* - - - </> [DATA] </> - - - *//
            const mapOptions = { center: { lat: lat, lng: lon }, zoom: 14, mapId: "DEMO_MAP_ID" };

            //* - - - </> [ITEM] </> - - - *//
            const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);

            //* - - - </> [DATA] </> - - - *//
            new window.google.maps.Marker({ position: { lat: lat, lng: lon }, title: "My location", map });
        };
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${code}&callback=initMapCallback&libraries=maps,marker&v=beta`;
            document.head.appendChild(script);

        return () => {

            document.head.removeChild(script);
            delete window.initMapCallback;
        };

    }, []);

    return (

        //* - - - </> [SECTION] </> - - - *//
        <section className='map-section'>

            <div id="map" style={{ width: "100%", height: "100%" }}></div>

        </section>

    );
}

export default Map;