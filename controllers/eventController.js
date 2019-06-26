const Event = require('../models/eventModel');

const createEvent = (req, res) => {
  const {
    name,
    location,
    owner,
    startDateTime,
    endDateTime
  } = req.body;

  Event
    .create({
      name,
      location,
      owner,
      startDateTime,
      endDateTime
    })
    .then((result) => {
      res.status(201).json({
        message: 'Create event success!',
        data: result
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Create event failed!',
        error
      });
    });
};

const getAllEvent = (req, res) => {
  Event
    .find({})
    .then((result) => {
      res.status(200).json({
        message: 'Get all event success!',
        data: result
      })
    })
    .catch((error) => {
      res.status(200).json({
        message: 'Get all event failed!',
        error
      })
    })
};

const updateEvent = () => {};

const deleteEvent = (req, res) => {
  const { id } = req.params;

  Event
    .deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json({
        message: 'Delete event success!',
        data: result
      })
    })
    .catch((error) => {
      res.status(200).json({
        message: 'Delete event failed!',
        error
      })
    });
};

module.exports = {
  createEvent,
  getAllEvent,
  updateEvent,
  deleteEvent
}