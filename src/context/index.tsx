'use client'

import React, { createContext, ReactNode, useState } from 'react'

type Context = {
  place: any
  setPlace: (place: any) => void
  range: any
  setRange: (range: any) => void
}
const defaultContext: Context = {
  place: { show: false },
  setPlace: () => {},
  range: 0,
  setRange: () => {}
}

export const PlaceContext = createContext<Context>(defaultContext)

export const PlaceProvider = ({ children }: { children: ReactNode }) => {
  const [place, setPlace] = useState({ show: false })
  const [range, setRange] = useState(10)

  return (
    <PlaceContext.Provider value={{ place, setPlace, range, setRange }}>
      {children}
    </PlaceContext.Provider>
  )
}
