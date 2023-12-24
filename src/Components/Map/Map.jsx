import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Map.css"

function Map({ location }) {
  const defaultPosition = [51.505, -0.09]
  const [position, setPosition] = useState(defaultPosition)
  const [mapInitialized, setMapInitialized] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setPosition([latitude, longitude])
          },
          (error) => {
            console.error("Error getting user's location:", error)
            setPosition(defaultPosition)
            setMapInitialized(true)
          }
        )
      } catch (error) {
        console.error("Error fetching data:", error)
        setPosition(defaultPosition)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    // Update position when location prop changes
    setMapInitialized(true)
    setPosition(location || defaultPosition)
    console.log("this was called")
  }, [location])

  return (
    <div className="leaflet-container">
      {mapInitialized && (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  )
}

export default Map
