import React, { useState } from 'react'

const Button = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
  
  if(theme === "light"){
    setTheme("dark")
    document.querySelector("html").classList.add("dark");
  }else{
    setTheme("light");
    document.querySelector("html").classList.remove("dark");
  }
}
  return (
    <div>
      <button onClick={toggleTheme} className='text-black dark:text-white bg-white dark:bg-black py-2 px-3 font-bold '> {theme} </button>
    </div>
  )
}

export default Button

