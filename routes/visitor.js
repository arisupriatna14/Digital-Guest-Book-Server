const express = require('express');
const router = express.Router();

const { createVisitor, getAllVisitorByEvent } = require('../controllers/visitorController');

router
  .get('/:id', getAllVisitorByEvent)
  .post('/create/:id', createVisitor)

module.exports = router;
