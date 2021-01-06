'use strict'

document.getElementById('response').addEventListener('click', shiftSchedule)

document.getElementById('time').addEventListener('click', shiftSchedule)

function shiftSchedule () {
  const day = document.getElementById('time').value
  // user inputs the day of the week
  const age = document.getElementById('response').value
  // user inputs their age
  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age >= 18)) {
    alert('Time to go to work!')
  } else if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age <= 18)) {
    alert('Time to go to school!')
  } else if (day === 'Saturday' || day === 'Sunday') {
    alert('Time to relax for the weekend!')
  // the conditions above will examine the user response and output an alert whether they have to go to school, work, or they have a day off depending on what they input as their age and time of day
  } else {
    alert('Something went wrong, try again.')
  // this else condition operates if a response was written in the text boxes that doesn't relate to the age or day or if they wrote their age and the day in the wrong text boxes
  }
}
