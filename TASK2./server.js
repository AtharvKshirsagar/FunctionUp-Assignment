const express = require('express');
const app = express();
const port = 3000;
const { scheduleEvents } = require('./schedule');

// Import necessary packages and functions
const bodyParser = require('body-parser');
const { createEvent } = require('./client');

// Connect to MongoDB
const { connectToMongoDB } = require('./db');
connectToMongoDB().then(() => {
  console.log('Connected to MongoDB');
});

// Define API endpoint for creating events
app.use(bodyParser.json());
app.post('/events', async (req, res) => {
  const event = req.body;
  await createEvent(event);
  res.send('Event created successfully');
});

// Call scheduleEvents to start scheduling events
scheduleEvents();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
