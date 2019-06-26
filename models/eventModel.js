const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  owner: {
    type: String
  },
  startDateTime: {
    type: Date,
    required: true
  },
  endDateTime: {
    type: Date,
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
