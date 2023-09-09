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

  const handlerSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      title: title,
      startTime: startTime,
      endTime: endTime,
    }
    console.log(newEvent)
  }

  return (
    <form className="container">
      <div className="eventContainer">
        <h2>Add Event </h2>
        <div className="eventTitle">
          <span className="title">title</span>
          <input
            type="text"
            placeholder="event"
            onChange={handlerFunc}
            value={title}
          />
        </div>
        <div className="eventTime">
          <span className="title">time</span>
          <span className="duration">
            <span>from</span>
            <input
              type="time"
              id="from"
              onChange={handlerFunc}
              value={startTime}
            />
            <span>to</span>
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
