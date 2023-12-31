import React, { useState, useEffect, useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { fetchEventDates } from "./fetchEventDates"

const RenderDates = ({
  firstDayOfMonth,
  totalDaysInMonth,
  monthIndex,
  year,
}) => {
  const { setDateID, isLogin } = useContext(DataContext)
  const [dateInfo, setDateInfo] = useState("")
  const todaysDate = new Date().getDate()
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const [eventDates, setEventDates] = useState([])

  useEffect(() => {
    fetchEventDates(setEventDates)
    if (!isLogin) {
      setEventDates([])
    }
  }, [isLogin])

  useEffect(() => {
    setDateID(dateInfo)
   
  }, [dateInfo])

  const handleClick = (e) => {
    setDateInfo(e.currentTarget.id)
    // console.log('concatenateString', e.currentTarget.id)
    // console.log('includes ', eventDates.includes(e.currentTarget.id))
  }
  const dates = []

  // empty space before the first
  for (var i = 0; i < firstDayOfMonth; i++) {
    dates.push(<div className="grid-item empty-grid" key={-i}></div>)
  }

  // dates of the current month
  for (var i = 1; i <= totalDaysInMonth; i++) {
    i = i.toString()
    i.length === 1 ? (i = "0" + i) : i
    monthIndex.toString().length === 1
      ? (monthIndex = "0" + monthIndex)
      : monthIndex
    var concatenateString = i
      .toString()
      .concat(monthIndex.toString(), year.toString())

    i = parseInt(i)
    monthIndex = parseInt(monthIndex)
    const isToday =
      todaysDate === i && monthIndex === currentMonth && year === currentYear
    const isEventDate = eventDates.includes(concatenateString)
    const className = isToday
      ? "grid-item extra-effect gird-days "
      : "grid-item gird-days"

    const eventClass = isEventDate ? "box " : " "

    dates.push(
      <div
        className={className}
        key={concatenateString}
        id={concatenateString}
        onClick={handleClick}>
        {i}
        <div className={eventClass}></div>
      </div>
    )
  }

  //empty space
  const remainingCells = 42 - dates.length

  for (var i = 1; i <= remainingCells; i++) {
    dates.push(<div className="grid-item empty-grid" key={i}></div>)
  }

  return dates
}

export default RenderDates
