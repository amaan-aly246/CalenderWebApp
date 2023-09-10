import React, { useState, useEffect } from "react"
const RenderDates = ({
  firstDayOfMonth,
  totalDaysInMonth,
  monthIndex,
  year,
}) => {
  const [dateInfo, setDateInfo] = useState("")
  const todaysDate = new Date().getDate()
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const handleClick = (e) => {
    setDateInfo(e.currentTarget.id)
  }

  useEffect(() => {
    // console.log(dateInfo)
  }, [dateInfo])

  const dates = []

  // empty space before the first
  for (var i = 0; i < firstDayOfMonth; i++) {
    dates.push(<div className="grid-item empty-grid" key={-i}></div>)
  }

  // dates of the current month
  for (var i = 1; i <= totalDaysInMonth; i++) {
    i = i.toString() // Convert i to a string
    i.length === 1 ? (i = "0" + i) : i

    var concatenateString = i
      .toString()
      .concat(monthIndex.toString(), year.toString())

    i = parseInt(i) // Parse i as an integer again

    const isToday =
      todaysDate === i && monthIndex === currentMonth && year === currentYear
    const className = isToday
      ? "grid-item extra-effect gird-days"
      : "grid-item gird-days"

    dates.push(
      <div
        className={className}
        key={concatenateString}
        id={concatenateString}
        onClick={handleClick}>
        {i}
      </div>
    )
    // console.log(concatenateString)
  }

  //empty space
  const remainingCells = 42 - dates.length
  for (var i = 1; i <= remainingCells; i++) {
    dates.push(<div className="grid-item empty-grid" key={i}></div>)
  }

  return dates
}

export default RenderDates 
