import React, { createContext, useState, useEffect } from "react"
import { generateCurrentDateString } from "../functions/generateCurrentDateString"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [todayDateID, setDateID] = useState(generateCurrentDateString())
  const [username, setUsername] = useState(null)
  const [userID, setUserID] = useState("")

//  console.log(todayDateID);
  return (
    <DataContext.Provider
      value={{
        todayDateID,
        isLogin,
        setIsLogin,
        setDateID,
        username,
        setUsername,
        userID,
        setUserID,
      }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
