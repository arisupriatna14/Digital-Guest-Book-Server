const express = require('express');
const router = express.Router();

const { createEvent, getAllEvent } = require('../controllers/eventController');

router
  .get('/', getAllEvent)
  .post('/create', createEvent)

module.exports = router;
