import React from "react"
import "./EventCreate.css"
export default function EventCreate() {
  return (
    <form className="container">
      <div className="eventContainer">
        <h2>Add Event </h2>
        <div className="eventTitle">
          <span className="title">title</span>
          <input type="text" placeholder="event" />
        </div>
        <div className="eventTime">
          <span className="title">time</span>
          <span className="duration">
            <span>from</span>
            <input type="time" name="" id="" />
            <span>to</span>
            <input type="time" name="" id="" />
          </span>
        </div>
      </div>
      <button
        className="submitBtn"
        onClick={(e) => {
          e.preventDefault()
        }}>
        Submit
      </button>
    </form>
  )
}
