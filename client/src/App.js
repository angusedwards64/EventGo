import './App.css';
import { useState, useEffect } from 'react'
import ApiService from './ApiService'
import EventForm from './EventForm'
import EventList from './EventList'
import UpcomingEvent from './UpcomingEvent'

function App() {


  const [events, setEvents] = useState([])


  useEffect(() => {
    ApiService.getEvents()
    .then(events => setEvents(events.sort((a,b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()).filter(item => (new Date(item.date)).getTime() > Date.now())))
  },[events],
  )




  // console.log(events)


  function newEvent(title,date,venue) {
    if ((new Date(date)).getTime() < Date.now()) return;
    const event = {title: title, date: date, venue: venue}
    console.log(event)
    ApiService.postEvent(event)
    .then(returnedEvent => setEvents(currentEvents => [...currentEvents, returnedEvent]))
  }




  return (
    <div className="App">
      <div>
      <EventForm newEvent={newEvent}/>
      </div>
      <div>
      <div>
      <UpcomingEvent nextOne={events.slice(0,1)}/>
      </div>
      <div>
      <EventList events={events.slice(1)}/>
      </div>
      </div>
    </div>
  );
}

export default App;
