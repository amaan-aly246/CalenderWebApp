import React, { useState , useContext , useEffect } from "react"
import "./EventCreate.css"
import { DataContext } from "../../Context/DataContext"

export default function EventCreate() {
  
  const [title, setTitle] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  // date id on which the user clicked
  const [dateID, setDateID] = useState()
  const { data } = useContext(DataContext)

  useEffect(() => {
    // Update dateID when data changes
    setDateID(data)
  }, [data])

  useEffect(() => {
    // Log dateID whenever it changes
    if (dateID) {
      // console.log("EventCreate: ", dateID)
    }
  }, [dateID])
  
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

      if (response.status === 201) {
        setTitle("")
        setStartTime("")
        setEndTime("")
        alert("Event created successfully.")
        window.location.href = '/'
      } else {
        alert("Error creating event. , event cannot be empty ")
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
      if (!response.ok) {
        throw new error("Failed to get user")
      }
      const { id: userID } = await response.json()
      const newEvent = {
        title: title,
        timeFrom: startTime,
        timeTo: endTime,
        userID: userID,
        dateID: dateID
      }

      // create event function
      createEventFunc(newEvent)
    } catch (error) {
      console.log('Error', error);
    }
  }

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
