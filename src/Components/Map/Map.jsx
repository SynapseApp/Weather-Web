import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Map.css"

function Map() {
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
          }
        )
      } catch (error) {
        console.error("Error fetching data:", error)
        setPosition(defaultPosition)
      }
    }

    fetchData()
  }, []) // Run this effect only once on component mount

  // Set mapInitialized to true once the position is updated
  useEffect(() => {
    setMapInitialized(true)
  }, [position])

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
