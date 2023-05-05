const { Event } = require('./models');

const schedule = require('node-schedule');

const triggerFunction = async (event) => {
  const { text, dateTime } = event;

  const reversedText = text.split('').reverse().join('');
  const now = new Date().toLocaleString('en-US', { timeZone: event.timeZone });
  console.log(`[${now}] Reversed text: ${reversedText}`);

  await Event.findByIdAndDelete(event._id);
  console.log(`Deleted event with id ${event._id}`);
};

const scheduleEvents = async () => {
  const events = await Event.find().sort({ dateTime: 'asc' });
  console.log(`Scheduling ${events.length} events`);

  events.forEach((event) => {
    const { dateTime } = event;
    console.log(`Scheduling event: ${event.text} at ${dateTime}`);

    schedule.scheduleJob(dateTime, () => {
      triggerFunction(event);
    });
  });
};

module.exports = { scheduleEvents };
