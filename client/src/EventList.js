import React from 'react'
import "./EventList.css"
import moment from 'moment'

export default function EventList(props) {

  // console.log(props)

  function monthConverter (date) {
    return moment(date).format("MMM")
  }
  function dayConverter (date) {
    return moment(date).format("Do")
  }

  function dateConverter (date) {
    return moment(date).format('h:mma - MMMM Do YYYY');
  }


  let events = props.events.map(event =>
    <div className="itemContainer">
      <div className="whiteDate">
      <h1 className="dayConverted">{dayConverter(event.date)}</h1>
      <h1 className="monthConverted">{monthConverter(event.date)}</h1>
      </div>
      <div className="EventItem">
      <div className="eventsTitle">
        {event.title}
      </div>
      <div className="eventsDetails">
        {dateConverter(event.date)}
      </div>
      <div className="eventsDetails">
        {event.venue}
      </div>
      </div>
    </div>
  )

  return (
    <div className="events">
      {events}
    </div>
  )
}
