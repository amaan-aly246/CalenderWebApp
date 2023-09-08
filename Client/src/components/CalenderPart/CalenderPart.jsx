import React from "react"
import "./CalenderPart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import  days  from "../../data/daysArr"

import "../../App.css"
export default function CalenderPart() {
  return (
    <section className="Calender-Container">
      <header className="Calender-header">
        <span className="leftBtn">
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="month">September</span>
        <span className="year">2023</span>
        <span className="rightBtn">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </header>
      <section className="Calender">
        <div className="grid-days">
          {days.map((day) => (
            <div className="grid-item" key={day}>
              {day}
            </div>
          ))}
        </div>

        <div className="grid-date">
          {Array.from({ length: 42 }, (index) => (
            <div className="grid-item" key={index}>
              {index}
            </div>
          ))}
        </div>
      </section>
      <footer className="Calender-footer"></footer>
    </section>
  )
}
