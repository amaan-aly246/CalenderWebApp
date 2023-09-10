import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { DateInfoProvider } from "./ContextProvider/DateInfoContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <DateInfoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DateInfoProvider>
)
{
  /* <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> */
}
