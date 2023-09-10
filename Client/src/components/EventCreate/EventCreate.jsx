import React, { useState } from "react"
import "./EventCreate.css"
export default function EventCreate() {
  const [title, setTitle] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  const handlerFunc = (e) => {
    if (e.target.id === "from") {
      setStartTime(e.target.value)
    } else if (e.target.id === "to") {
      setEndTime(e.target.value)
    } else {
      setTitle(e.target.value)
    }
  }

  const handlerSubmit = async (e) => {
    e.preventDefault()
    const newEvent = {
      title: title,
      timeFrom: startTime,
      timeTo: endTime,
    }

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
        setTimeout(() => {
        window.location.href = "/";
          
        }, 1000);
      } else {
        console.error("Error creating event.")
        alert("Error creating event. , event cannot be empty ")
      }
    } catch (error) {
      console.error("Error:", error)
    }
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
