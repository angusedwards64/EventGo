// const base_url = 'http://localhost:3005/'


function fetchRequest(url, options) {

  return fetch('http://localhost:3010/events', options)
  .then(res => res.status < 400 ? res : Promise.reject())
  .then(res => res.json())
  .catch(err => console.log(err));
}


function getEvents() {
  return fetchRequest('http://localhost:3010/events')
}


function postEvent(events) {
  console.log(events)
  return fetchRequest('http://localhost:3010/events', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(events)
  })
}




const ApiService = {getEvents, postEvent}

export default ApiService