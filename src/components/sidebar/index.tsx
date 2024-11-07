/* eslint-disable @next/next/no-img-element */
'use client'

import { PlaceContext } from '@/src/context'
import { cn } from '@/src/shared/helpers'
import { useContext } from 'react'
import StarIcon from '../../../public/images/star.svg'
import CloseIcon from '../../../public/images/close.svg'

const Rating = ({ score }: { score: number }) => (
  <div className="flex h-7 w-full max-w-[200px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        className={cn(
          'h-full w-full',
          index + 1 <= score ? 'fill-yellow-400' : 'fill-white'
        )}
        key={index}
      />
    ))}
  </div>
)

const Sidebar = () => {
  const { place, setPlace } = useContext(PlaceContext)

  return (
    <aside
      className={cn(
        'absolute z-[9999] h-full w-0 rounded-lg bg-slate-800 bg-opacity-70 backdrop-blur-sm transition-all',
        place.show && 'w-full sm:w-56'
      )}
    >
      <div
        className={cn(
          'visible relative flex w-full flex-col items-center justify-center gap-4 px-5 py-10 text-white delay-75',
          !place.show && 'invisible delay-0'
        )}
      >
        <button
          className="absolute right-3 top-3"
          onClick={() => setPlace({ ...place, show: false })}
        >
          <CloseIcon className="size-5 stroke-white" />
        </button>
        <img
          src={place?.image}
          className="size-32 rounded-full object-cover"
          alt={`imagem do local: ${place.name}`}
        />
        <h1 className="text-lg">{place.name}</h1>
        <p className="text-center text-sm">
          {place?.address?.street}, {place?.address?.number} -{' '}
          {place?.address?.neighborhood}
        </p>
        <Rating score={place?.rating} />
      </div>
    </aside>
  )
}

export default Sidebar
