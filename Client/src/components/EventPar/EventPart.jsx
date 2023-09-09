import React from "react"
import "./EventPart.css"
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import listItem from "../../data/listItem"
import { months , fullDays } from "../../data/Data"

function EventPart() {
  const currentDate = new Date()
  // console.log(currentDate.getMonth())
  return (
    <section className="Event-Container">
      <header className="event-header">
        <span className="event-day">{fullDays[currentDate.getDay()]}</span>
        <span className="event-complete-date">
          {currentDate.getDate()}th {months[currentDate.getMonth()].month}{" "}
          {currentDate.getFullYear()}
        </span>
      </header>
      <section className="event-content">
        <ul className="event-list">
          {listItem.map((item) => (
            <li className="event-item" key={item.index}>
              <p className="event-title">{item.title}</p>
              <p className="event-time">{item.time}</p>
            </li>
          ))}
        </ul>
      </section>
      <footer className="event-footer">
        <button className="loginBtn">Login</button>
        <button className="registerBtn">Register</button>
        <button className="createEvent">
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ color: "rgb(112, 119, 146)" }}
          />
        </button>
      </footer>
    </section>
  )
}

export default EventPart
