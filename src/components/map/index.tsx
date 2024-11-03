'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { PlaceContext } from '@/src/context'
import { getPlaces } from '@/src/actions'

type Position = { lat: number; lon: number }

type Place = {
  name: string
  geo: {
    lat: number
    lon: number
  }
  address: {
    street: string
    number: string
    neighborhood: string
  }
  rating: number
  image: string
}

function isWithinMargin(userMarker: L.Circle, latlng: L.LatLng) {
  var distance = userMarker.getLatLng().distanceTo(latlng)
  return distance <= userMarker.getRadius()
}

const Map = () => {
  const [map, setMap] = useState<L.Map | null>(null)
  const [position, setPosition] = useState<Position | null>(null)
  const [userMarker, setUserMarker] = useState<L.Circle | null>(null)
  const [places, setPlaces] = useState<Place[]>([])
  const [markers, setMarkers] = useState<{ name: string; marker: L.Marker }[]>(
    []
  )

  const { setPlace, range } = useContext(PlaceContext)

  const userRange = range * 100

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      },
      (error) => {
        console.error(error)
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    )

    const initMap = L.map('map').setView(
      [-22.949861056694537, -43.20956416528346],
      13
    )

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(initMap)

    setMap(initMap)

    return () => {
      initMap.remove()
    }
  }, [])

  useEffect(() => {
    const getPlacesData = async () => {
      const res = await getPlaces()
      setPlaces(res.data)
    }

    getPlacesData()
  }, [])

  useEffect(() => {
    if (!map || !places) return

    const addPlaces = async () => {
      let updateMarkers = markers

      places.forEach((place) => {
        const latLng = L.latLng(place.geo.lat, place.geo.lon)

        if (userMarker && isWithinMargin(userMarker, latLng)) {
          if (updateMarkers.find((item) => item.name === place.name)) {
            return
          }

          const marker = L.marker([place.geo.lat, place.geo.lon], {
            icon: L.icon({
              iconUrl: 'images/pin.png',
              iconSize: [40, 40]
            })
          })
            .addTo(map)
            .on('click', () =>
              setPlace((prev: any) => {
                const showSidebar = prev.name !== place.name || !prev.show
                return { ...place, show: showSidebar }
              })
            )

          updateMarkers.push({ name: place.name, marker })
        } else {
          const markerToRemove = updateMarkers.find(
            (item) => item.name === place.name
          )

          markerToRemove?.marker.remove()
          updateMarkers = updateMarkers.filter(
            (item) => item.name !== place.name
          )
        }
      })

      setMarkers(updateMarkers)
    }

    addPlaces()
  }, [map, range, places])

  useEffect(() => {
    if (!map || !position) return

    const { lat, lon } = position

    const marker = L.circle([lat, lon], {
      color: '#5a7bfb',
      fillColor: 'gray',
      fillOpacity: 0.5,
      radius: userRange
    }).addTo(map)

    userMarker && map.removeLayer(userMarker)
    setUserMarker(marker)

    map.setView([lat, lon])
  }, [position, range])

  return (
    <div
      id="map"
      style={{ height: '500px', width: '100%' }}
      className="rounded-lg"
    />
  )
}

export default Map
