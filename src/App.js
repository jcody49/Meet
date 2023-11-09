import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import React, { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import LoadingSpinner from './components/LoadingSpinner';


import './App.css';

/**
 * Main application component that displays event information and charts.
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  // Define setErrorAlert function
  /*const setErrorAlert = (message) => {
    // Implement error handling logic here
    console.error(message);
  };*/

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert("Events have been loaded from cache and may not be up to date")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  /**
   * Fetches event data based on selected city and number of events.
   */
  const fetchData = async () => {
    setIsLoading(true); // Set isLoading to true before loading data
    try {
        const allEvents = await getEvents();
        const filteredEvents = currentCity === "See all cities" ?
            allEvents :
            allEvents.filter(event => event.location === currentCity);
        setEvents(filteredEvents.slice(0, currentNOE));
        setAllLocations(extractLocations(allEvents));
    } catch (error) {
        // Handle the error, for example, display an error message
        console.error("Error fetching data:", error);
    } finally {
        setIsLoading(false); // Set isLoading back to false
    }
}


  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {isLoading && <LoadingSpinner />} {/* Render LoadingSpinner if isLoading is true */}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} />
      <NumberOfEvents 
      setCurrentNOE={setCurrentNOE} 
      setErrorAlert={setErrorAlert} />
      <div className='charts-container'>
        <CityEventsChart allLocations={allLocations} events={events} />
        <EventGenresChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
 );
  
}

export default App;
