import React from 'react';
import { useState, useEffect } from "react";

/**
 * The `CitySearch` component allows users to search for cities and select a city from suggestions.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.allLocations - An array of all available city locations.
 * @param {Function} props.setCurrentCity - A function to set the current city.
 * @param {Function} props.setInfoAlert - A function to set informational alerts.
 * @returns {JSX.Element} The rendered CitySearch component.
 */
const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setSuggestions(allLocations);
    }, [`${allLocations}`]);

    /**
     * Handle input changes and filter city suggestions based on user input.
     * @param {Event} event - The input change event.
     */
    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);

        let infoText;
        if (filteredLocations.length === 0) {
          infoText = "We can not find the city you are looking for. Please try another city"
        } else {
          infoText = ""
        }
        setInfoAlert(infoText);
    };

    /**
     * Handle item click to select a city from the suggestions.
     * @param {Event} event - The item click event.
     */
    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false); // to hide the list
        setCurrentCity(value);
        setInfoAlert("")
    };

    return (
        <div id="city-search">
            <input
                type="text"
                className="city"
                placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
            />
            {showSuggestions ?
                <ul className="suggestions">
                    {suggestions.map((suggestion) => {
                        return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
                    })}
                    <li key='See all cities' onClick={handleItemClicked}>
                      <b>See all cities</b>
                    </li>
                </ul>
                : null
            }
        </div>
    )
}
   
export default CitySearch;