import React from 'react'
import './EventForm.css'
import { useState} from 'react'

export default function EventForm(props) {

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [venue, setVenue] = useState("")


  function eventSubmit(event) {
    event.preventDefault();
    if (!title) return alert("Please select a title")
    if (!date) return alert("Please select a date")
    if (!venue) return alert("Please select a venue")
    props.newEvent(title,date,venue);
    setTitle("")
    setDate("")
    setVenue("")
  }


  function submitTitle(event) {
    setTitle(event.target.value)
  }
  function submitDate(event) {
    setDate(event.target.value)
  }
  function submitVenue(event) {
    setVenue(event.target.value)
  }


  return (
    <div>
      <form className="form" onSubmit={eventSubmit}>
        <h2>Create a new event</h2>
        <h6 className="holders">TITLE</h6>
        <input className="textHolders" placeholder="Insert a title..." value={title} type="text" onChange={submitTitle}></input>
        <h6 className="holders">DATE</h6>
        <input className="textHolders" placeholder="Insert a Date..." value={date} type="datetime-local" onChange={submitDate}></input>
        <h6 className="holders">VENUE</h6>
        <input className="textHolders" placeholder="Insert a venue..." value={venue} type="text" onChange={submitVenue}></input>
        {/* <div> */}
        <button className="formSubmit" type="submit">Create</button>
        {/* </div> */}
      </form>
    </div>
  )
}
