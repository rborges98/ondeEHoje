import { PlaceContext } from '@/src/context'
import { useContext } from 'react'

const UserPositionRange = () => {
  const { setRange, range } = useContext(PlaceContext)

  const formatedRange = range / 10

  return (
    <div className="absolute right-3 top-3 z-[9999] w-fit rounded-lg bg-black bg-opacity-40 p-3">
      <h1 className="text-white">Área de busca: {formatedRange} km</h1>
      <input
        type="range"
        className="w-full"
        onChange={(e) => setRange(e.target.value)}
        defaultValue={10}
        min={1}
      />
    </div>
  )
}

export default UserPositionRange
