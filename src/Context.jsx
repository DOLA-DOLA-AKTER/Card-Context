import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()

const DataProvide = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(result => setData(result.users))
  }, [])

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvide