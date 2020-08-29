/*newDate is JS built-in function to get 
      today*s date. setDate is JS to get future date.
      to get future setdate, i add the number of days 
      to the getDate  */

function getEventWeekday(days) {
  let targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);
  console.log(targetDate);
}
getEventWeekday(5);
