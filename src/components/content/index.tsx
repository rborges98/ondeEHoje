'use client'

import Map from '../map'
import { PlaceProvider } from '@/src/context'
import Sidebar from '../sidebar'
import UserPositionRange from '../mapRange'

const Content = () => {
  return (
    <PlaceProvider>
      <div className="relative h-full w-full max-w-[80%]">
        <UserPositionRange />
        <Sidebar />
        <Map />
      </div>
    </PlaceProvider>
  )
}

export default Content
