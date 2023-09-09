export const renderDates = (firstDayOfMonth, totalDaysInMonth) => {
    const dates = []
    // empty space before the first
    for (var i = 0; i < firstDayOfMonth; i++) {
      dates.push(<div className="grid-item empty-grid"></div>)
    }
    // dates of the current month
    for (var i = 1; i < totalDaysInMonth; i++) {
      dates.push(
        <div className="grid-item" key={i}>
          {i}
        </div>
      )
    }
    //empty space
    const remainingCells = 42 - dates.length
    for (var i = 0; i < remainingCells; i++) {
      dates.push(<div className="grid-item empty-grid"></div>)
    }
    return dates
  }