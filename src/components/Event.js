import React, { useState } from "react";

/**
 * The `Event` component displays details of an event and allows the user to toggle event details.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.event - The event data to be displayed.
 * @returns {JSX.Element} The rendered Event component.
 */
const Event = ({ event }) => {
  // Use state to keep track of whether details should be shown or hidden
  const [showDetails, setShowDetails] = useState(false);
  
  /**
   * Toggle the display of event details.
   */
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  // Format the date and time
  const formattedDateTime = new Date(event.start.dateTime).toLocaleString();
  
  return (
    // List item for the event
    <li>
      <div className="event">
        <h2 style={{ color: "#1e847f" }}>{event.summary}</h2>
        <div className="location">{event.location}</div>

        {showDetails && <div className="details">{event.description}
        <br />
        <strong>Date and Time:</strong> {formattedDateTime}
        </div>}
        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};

export default Event;
