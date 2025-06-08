import React from 'react';

const TalkToUs = () => (
  <div>
    <h2>Talk to Us</h2>
    <p>Send your testimonies, experiences, and suggestions.</p>
    <form>
      <textarea placeholder="Your message..." rows="5" cols="50"></textarea>
      <br />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default TalkToUs;