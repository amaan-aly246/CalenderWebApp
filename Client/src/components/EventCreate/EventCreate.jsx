import React, { useState, useContext, useEffect } from "react"
import "./EventCreate.css"
import { DataContext } from "../../Context/DataContext"
import { Navigate } from "react-router-dom"
import { generateCurrentDateString } from "../../functions/generateCurrentDateString"

export default function EventCreate() {
  const [redirect, setRedirect] = useState(false)

  const [title, setTitle] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  const { todayDateID, setDateID } = useContext(DataContext)
  // const [dateID, setDateID] = useState(data)

  useEffect(() => {
    setDateID(todayDateID)
  }, [todayDateID])

  const handlerFunc = (e) => {
    if (e.target.id === "from") {
      setStartTime(e.target.value)
    } else if (e.target.id === "to") {
      setEndTime(e.target.value)
    } else {
      setTitle(e.target.value)
    }
  }

  const createEventFunc = async (newEvent) => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify(newEvent),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok == true) {
        alert("Event created successfully.")
        setTitle("")
        setStartTime("")
        setEndTime("")
        setRedirect(true)
      } else {
        alert(" Error creating event. , event cannot be empty ")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const fetchUseIdFunc = async () => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        credentials: "include",
      })

      const { id: userID } = await response.json()

      if (todayDateID === "") {
        const newEvent = {
          title: title,
          timeFrom: startTime,
          timeTo: endTime,
          userID: userID,
          dateID: generateCurrentDateString(),
        }
        createEventFunc(newEvent)
      } else {
        const newEvent = {
          title: title,
          timeFrom: startTime,
          timeTo: endTime,
          userID: userID,
          dateID: todayDateID,
        }
        createEventFunc(newEvent)
      }
    } catch (error) {
      console.log("Error", error)
    }
  }

  if (redirect) return <Navigate to={"/"}></Navigate>
  const handlerSubmit = async (e) => {
    e.preventDefault()
    // fetch the userId stored in cookies.
    fetchUseIdFunc()
  }
  return (
    <form className="container">
      <div className="eventContainer">
        <h2>Add Event</h2>
        <div className="eventTitle">
          <span className="title">Title</span>
          <input
            type="text"
            placeholder="Event"
            onChange={handlerFunc}
            value={title}
          />
        </div>
        <div className="eventTime">
          <span className="title">Time</span>
          <span className="duration">
            <span>From</span>
            <input
              type="time"
              id="from"
              onChange={handlerFunc}
              value={startTime}
            />
            <span>To</span>
            <input type="time" id="to" onChange={handlerFunc} value={endTime} />
          </span>
        </div>
      </div>
      <button className="submitBtn" onClick={handlerSubmit}>
        Submit
      </button>
    </form>
  )
}
