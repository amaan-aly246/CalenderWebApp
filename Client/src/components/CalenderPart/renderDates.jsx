export const renderDates = (
  firstDayOfMonth,
  totalDaysInMonth,
  monthIndex,
  year
) => {
  const todaysDate = new Date().getDate()
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  // console.log(currentMonth)
  const dates = []
  // empty space before the first
  for (var i = 0; i < firstDayOfMonth; i++) {
    dates.push(<div className="grid-item empty-grid"></div>)
  }
  // dates of the current month
  for (var i = 1; i <= totalDaysInMonth; i++) {
    if (
      todaysDate === i &&
      monthIndex === currentMonth &&
      year === currentYear
    ) {
      dates.push(
        <div className="grid-item extra-effect gird-days" key={i}>
          {i}
        </div>
      )
    } else {
      dates.push(
        <div className="grid-item gird-days" key={i}>
          {i}
        </div>
      )
    }
  }

  //empty space
  const remainingCells = 42 - dates.length
  for (var i = 0; i < remainingCells; i++) {
    dates.push(<div className="grid-item empty-grid"></div>)
  }
  return dates
}
