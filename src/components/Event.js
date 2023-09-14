import React, { useState } from "react";

// The Event component receives an 'event' prop containing event data
const Event = ({ event }) => {
  // Use state to keep track of whether details should be shown or hidden
  const [showDetails, setShowDetails] = useState(false);
  // Toggle the state when the "Show Details" button is clicked
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    // List item for the event
    <li>
      <div className="event">
        <h2 style={{ color: "#1e847f" }}>{event.summary}</h2>
        <div className="location">{event.location}</div>
        <div className="dateTime">{event.start.dateTime}</div>
        {showDetails && <div className="details">{event.description}</div>}
        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};

export default Event;
