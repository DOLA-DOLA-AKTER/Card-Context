import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const BtnContext = () => {
    const [theme, setTheme] = useState('light')

    const toggleDarkMode = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.querySelector('html').classList.add('dark')
        } else {
            setTheme('light')
            document.querySelector('html').classList.remove('dark')
        }
    }

    return (
        <div className='flex justify-center bg-white dark:bg-gray-900 p-5'>
            <button style={{background: theme === 'light' ? '#ccc' : '#333'}}
                className='flex items-center gap-2 py-2 px-4 font-bold rounded-full text-2xl'
                onClick={toggleDarkMode}>
                {theme === 'light' ?  <FaMoon className='text-white'/> : <FaSun className='text-yellow-400'/>}
            </button>
        </div>
    )
}

export default BtnContext
