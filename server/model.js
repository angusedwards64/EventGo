const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/eventsDatabase')

const db = mongoose.connection;

db.on('error', err => console.error)
db.once('open', () => {
  console.log('connected to eventDB')
})


const eventSchema = new Schema({
  title: String,
  date: String,
  venue: String,
})

const EventModel = mongoose.model('EventModel', eventSchema)

module.exports = EventModel