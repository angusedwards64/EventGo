const  EventModel  = require('./model');



const getEvents = async function(req, res) {
  // console.log('hitting get')

  try {

    const events = await EventModel.find();
    res.send(events)
  }

  catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}


const postEvents = async function(req, res) {
  console.log('hitting post')

  try {
    const events = req.body;
    // if (!events.title) res.sendStatus(400);
    // if (!events.date) res.sendStatus(400);
    // if (!events.venuedate) res.sendStatus(400);
    const savedEvent = await EventModel.create(events);
    res.status(201)
    res.send(savedEvent)
  }

  catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

module.exports = { postEvents, getEvents }