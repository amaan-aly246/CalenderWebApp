// DateInfoContext.js
import React, { createContext, useState } from "react"

const DateInfoContext = createContext()

const DateInfoProvider = ({ children }) => {
  const [dateInfo, setDateInfo] = useState("")

  return (
    <DateInfoContext.Provider value={{ dateInfo }}>
      {children}
    </DateInfoContext.Provider>
  )

}

export { DateInfoProvider, DateInfoContext }
