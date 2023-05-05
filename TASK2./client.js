const { Event } = require('./models');

const createEvent = async (event) => {
  const newEvent = new Event(event);
  await newEvent.save();
};

module.exports = { createEvent };
