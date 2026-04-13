import React, { useContext } from 'react'
import { DataContext } from './Context'

const CardContex = () => {
    const context = useContext(DataContext)

    if (!context)
        return null

    const { data } = context
    return (
        <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-gray-900 min-h-screen'>
            {data.map((item) => (
                <div 
                    key={item.id} 
                    className='hover:scale-105 transition bg-white dark:bg-gray-800 rounded-lg px-6 py-8 shadow-lg'
                >
                    <img 
                        src={item.image} 
                        alt={item.firstName} 
                        className='w-24 h-24 rounded-full mx-auto'
                    />

                    <h2 className='text-center mt-4 text-lg font-bold text-black dark:text-white'>
                        {item.firstName} {item.lastName}
                    </h2>

                    <p className='text-center text-gray-500 dark:text-gray-400'>
                        {item.email}
                    </p>
                    <p className='text-center text-gray-500 dark:text-gray-400'>
                        {item.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque ad alias?
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CardContex
