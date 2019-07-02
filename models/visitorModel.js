const mongoose = require('mongoose');

const visitorSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  address: {
    type: String
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('Visitor', visitorSchema);
