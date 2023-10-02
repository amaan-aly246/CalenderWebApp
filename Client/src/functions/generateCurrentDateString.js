export const generateCurrentDateString = ()=>{
    var todaysDate = new Date().getDate()
  var currentMonth = new Date().getMonth()
  var currentYear = new Date().getFullYear()
  currentMonth.toString().length === 1 ? (currentMonth = "0" + currentMonth): currentMonth.toString;
  todaysDate.toString().length === 1? (todaysDate = "0" + todaysDate): todaysDate.toString();
  const dateString = todaysDate.toString().concat(currentMonth.toString(), currentYear.toString());
  return dateString;
}