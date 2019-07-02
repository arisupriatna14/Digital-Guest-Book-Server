const Visitor = require('../models/visitorModel');

const createVisitor = (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    address,
    notes
  } = req.body;
  const { id } = req.params;

  Visitor
    .create({
      name,
      email,
      phoneNumber,
      address,
      eventId: id,
      notes
    })
    .then((result) => {
      res.status(201).json({
        message: 'Create visitor success!',
        data: result
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Create visitor failed!',
        error
      });
    })
}

const getAllVisitorByEvent = (req, res) => {
  const { id } = req.params;

  Visitor
    .find({})
    .sort({ createdAt: -1 })
    .where({ eventId: id })
    .populate('eventId', 'name')
    .then((result) => {
      res.status(200).json({
        message: 'Get all visitor by event success!',
        data: result
      })
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Get all visitor by event failed!',
        error
      })
    })
}

module.exports = {
  createVisitor,
  getAllVisitorByEvent
}