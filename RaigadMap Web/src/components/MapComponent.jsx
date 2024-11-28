/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/MapComponent.jsx
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./styles/mapComponent.module.css";

const MapComponent = ({ places }) => {
    const [hoverData, setHoverData] = useState(null);
    const [isHoveringTooltip, setIsHoveringTooltip] = useState(false);

    const defaultIcon = L.icon({
        iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const HoverTooltip = ({ data }) =>
        data ? (
            <div
                className={styles.hoverTooltip}
                style={{
                    top: `${data.position.y}px`,
                    left: `${data.position.x}px`,
                }}
                onMouseEnter={onTooltipMouseEnter} // Start tracking tooltip hover
                onMouseLeave={onTooltipMouseLeave} // Stop tracking tooltip hover
            >
                <h4>{data.place["Place Name"]}</h4>
                <img src={data.place["Image URL"]} alt={data.place["Place Name"]} />
                {/* <p>{data.place.Description}</p>
                <a
                    href={data.place["Link to Page"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.popupLink}
                >
                    More Info
                </a>
                <a
                    href={data.place["Directions Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.popupLink}
                >
                    Get Directions
                </a> */}
            </div>
        ) : null;    

    let hoverTimeout;

    const addHoverEffect = (e, place) => {
        const { latlng, originalEvent } = e;
        setHoverData({
            place,
            position: {
                // x: originalEvent.clientX,
                // y: originalEvent.clientY,
            },
        });
    };
    
    const removeHoverEffect = () => {
        if (!isHoveringTooltip) {
            setHoverData(null);
        }
    };
    
    const onTooltipMouseEnter = () => {
        setIsHoveringTooltip(true);
    };
    
    const onTooltipMouseLeave = () => {
        setIsHoveringTooltip(false);
    };        

    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                className={styles.mapContainer}
                center={[18.3142, 73.4084]}
                zoom={10}
                scrollWheelZoom={true}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {places.map((place, index) => {
                    const latitude = parseFloat(place.Latitude);
                    const longitude = parseFloat(place.Longitude);

                    if (isNaN(latitude) || isNaN(longitude)) {
                        console.warn(`Invalid coordinates for place: ${place["Place Name"]}`);
                        return null;
                    }

                    return (
                        <Marker
                            key={index}
                            position={[latitude, longitude]}
                            icon={defaultIcon}
                            eventHandlers={{
                                mouseover: (e) => addHoverEffect(e, place),
                                mouseout: removeHoverEffect,
                            }}
                        >
                            <Popup>
                                <div className={styles.popupContent}>
                                    <h2>{place["Place Name"]}</h2>
                                    {place["Image URL"] && (
                                        <img
                                            src={place["Image URL"]}
                                            alt={place["Place Name"]}
                                            className={styles.popupImage}
                                        />
                                    )}
                                    {place["Link to Page"] && (
                                        <a
                                            href={place["Link to Page"]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.popupLink}
                                        >
                                            More Info
                                        </a>
                                    )}
                                    {place["Directions Link"] && (
                                        <a
                                            href={place["Directions Link"]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.popupLink}
                                        >
                                            Get Directions
                                        </a>
                                    )}
                                    <p>{place.Description}</p>
                                </div>
                            </Popup>
                        </Marker>

                    );
                })}
            </MapContainer>
            <HoverTooltip data={hoverData} />
        </div>
    );
};

export default MapComponent;
