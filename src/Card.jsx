import  { useContext } from 'react'
import { DataContext } from './Context'

const Card = () => {
  const context = useContext(DataContext)

  // safety check (important)
  if (!context) return null

  const { data } = context

  return (
    <div>
        <div className='dark:bg-black dark:text-blue-800 bg-amber-100 text-black font-bold p-5 flex flex-wrap gap-5'>
        {data.map((item) => (
            <div key={item.id}>
            <img src={item.image} alt={item.firstName} />
            <h2>{item.firstName}</h2>
            <p className='dark:text-green-700 w-60 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus nulla architecto suscipit amet debitis unde labore in? Molestiae, sapiente. </p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Card