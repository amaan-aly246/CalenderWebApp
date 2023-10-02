import React, { createContext, useState } from "react"
import { generateCurrentDateString } from "../functions/generateCurrentDateString"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [data, setData] = useState(generateCurrentDateString())

  const updateData = (newData) => {
    setData(newData)
  }

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
