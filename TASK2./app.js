import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [text, setText] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = { text, dateTime };
    await axios.post('/events', event);
    alert('Event created successfully');
  };

  return (
    <div>
      <h1>Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <br />
        <label>
          Date and Time (YYYY-MM-DD HH:mm:ss):
          <input type="text" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default App;
