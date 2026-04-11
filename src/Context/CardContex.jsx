import React, { useContext } from 'react'
import { DataContext } from './Context'

const CardContex = () => {
    const context = useContext(DataContext)

    if (!context)
        return null

    const { data } = context
    return (
        <div className='bg-white dark:bg-black rounded-lg ring ring-black/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((item) => (
                <div key={item.id} className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5'>
                    <img src={item.image} alt={item.firstName} />
                    <h2 className='text-black font-bold dark:text-white'>{item.firstName}</h2>
                    <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CardContex
