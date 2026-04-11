import React, { useState } from 'react'

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
        <div className='flex justify-center bg-white dark:bg-black p-5'>
            <button className='text-white dark:text-black bg-black dark:bg-white py-2 px-3 font-bold rounded-2xl' onClick={toggleDarkMode}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}

export default BtnContext
