import Event from "./Event";

/**
 * The `EventList` component displays a list of events.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.events - The list of events to be displayed.
 * @returns {JSX.Element} The rendered EventList component.
 */
const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events ?
        events.map(event => <Event key={event.id} event={event} />) :
        null}
    </ul>
  );
}

export default EventList;