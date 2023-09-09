import React, { useState, useEffect } from "react"
import "./CalenderPart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { days, months, fullDays } from "../../data/Data"
import "../../App.css"
import { renderDates } from "./renderDates"
export default function CalenderPart() {
  const currentDate = new Date()
  // console.log(currentDate.getDate())

  const [monthIndex, setMonthIndex] = useState(currentDate.getMonth())
  const [year, setYear] = useState(currentDate.getFullYear())
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0)
  const [totalDaysInMonth, setTotalDaysInMonth] = useState(0)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const completeDate = new Date(year, monthIndex, 1)
    const lastDay = new Date(year, monthIndex + 1, 0).getDate()
    const firstDay = completeDate.getDay()
    setFirstDayOfMonth(firstDay)
    setTotalDaysInMonth(lastDay)
  }, [year, monthIndex])

  const handlerLeftBtn = () => {
    setMonthIndex((prevMonthIndex) => {
      if (prevMonthIndex <= 0) {
        setYear(year - 1)
        return 11
      } else {
        return prevMonthIndex - 1
      }
    })
  }
  const handlerRightBtn = () => {
    setMonthIndex((nextMonthIndex) => {
      if (nextMonthIndex >= 11) {
        setYear(parseInt(year) + 1)
        return 0
      } else {
        return nextMonthIndex + 1
      }
    })
  }
  const handleOnchange = (event) => {
    // console.log(event.target.value)
    setInputValue(event.target.value)
  }
  const handleOnKeyUp = (event) => {
    if (event.key == "Enter") {
      event.target.value = ""
      event.target.blur() // remove focus from the  input
      console.log(inputValue.split(":")[1].length)
      if (
        parseInt(inputValue.split(":")[0]) - 1 > 12 ||
        parseInt(inputValue.split(":")[1].length) != 4
      ) {
        alert("Invalid input, make sure to add ':'.  ")
        setYear(year)
        setMonthIndex(monthIndex)
      } else {
        setMonthIndex(parseInt(inputValue.split(":")[0]) - 1)
        setYear(inputValue.split(":")[1])
      }
    }
  }
  return (
    <section className="Calender-Container">
      <header className="Calender-header">
        <span className="leftBtn" onClick={handlerLeftBtn}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="month">{months[monthIndex].month}</span>
        <span className="year">{year}</span>
        <span className="rightBtn" onClick={handlerRightBtn}>
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
          {/* {Array.from({ length: 42  }, (index) => (
            <div className="grid-item" >
              
            </div>
          ))} */}
          {renderDates(firstDayOfMonth, totalDaysInMonth, monthIndex, year)}
        </div>
      </section>
      <footer className="Calender-footer">
        <input
          type="text"
          placeholder="mm:yyyy"
          className="Calender-input"
          onChange={handleOnchange}
          onKeyUp={handleOnKeyUp}
        />
      </footer>
    </section>
  )
}
