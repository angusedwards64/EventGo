import React from 'react'
import './UpcomingEvent.css'
import moment from 'moment'

export default function UpcomingEvent(props) {

function converter (date) {
  return moment(date).format("Do MMM")
}

function dateConverter (date) {
  return moment(date).format('h:mma - MMMM Do YYYY');
}

let newEvent = props.nextOne.map(item =>
  <div className="nextEvent">
      <h6 className="nextEventLabel textinput">NEXT EVENT</h6>
      <h2 className="boldDate textinput">{converter(item.date)}</h2>
      <h2 className="description textinput">{item.title}</h2>
      <h6 className="smallDate textinput">{dateConverter(item.date)}</h6>
      <h6 className="venue textinput">{item.venue}</h6>
    </div>
  )

  return (
    <div>
      {newEvent}
    </div>
  )
}
