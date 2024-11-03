import React, { createContext, useState } from 'react'

type Context = {
  place: any
  setPlace: (place: any) => void
  range: any
  setRange: (range: any) => void
}

export const PlaceContext = createContext<Context>({})

export const PlaceProvider = ({ children }) => {
  const [place, setPlace] = useState({ show: false })
  const [range, setRange] = useState(10)

  return (
    <PlaceContext.Provider value={{ place, setPlace, range, setRange }}>
      {children}
    </PlaceContext.Provider>
  )
}
