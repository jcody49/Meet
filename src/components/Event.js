import React from "react";

const Event = ({ event }) => {
  return (
    <li>
      <p>kind: {event.kind}</p>
      <p>etag: {event.etag}</p>
      <p>ID: {event.id}</p>
      <p>Status: {event.status}</p>
      <p>HTML Link: {event.htmlLink}</p>
      <p>Created: {event.created}</p>
      <p>Updated: {event.updated}</p>
      <h3>{event.summary}</h3>
      <p>Description: {event.description}</p>
      <p>Location: {event.location}</p>
      <p>Creator Email: {event.creator.email}</p>
      <p>Creator Self: {event.creator.self.toString()}</p>
      <p>Organizer Email: {event.organizer.email}</p>
      <p>Organizer Self: {event.organizer.self.toString()}</p>
      <p>Start Date Time: {event.start.dateTime}</p>
      <p>Start Time Zone: {event.start.timeZone}</p>
      <p>End Date Time: {event.end.dateTime}</p>
      <p>End Time Zone: {event.end.timeZone}</p>
      <p>Recurring Event ID: {event.recurringEventId}</p>
      <p>Original Start Date Time: {event.originalStartTime.dateTime}</p>
      <p>Original Start Time Zone: {event.originalStartTime.timeZone}</p>
      <p>iCal UID: {event.iCalUID}</p>
      <p>Sequence: {event.sequence}</p>
      <p>Reminders Use Default: {event.reminders.useDefault.toString()}</p>
      <p>Event Type: {event.eventType}</p>
      <button>Show Details</button>
    </li>
  );
};

export default Event;
