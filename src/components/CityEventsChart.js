import { useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


/**
 * Find the most frequent genre in a list of events.
 * @param {Array} events - An array of event objects.
 * @returns {string} The most frequent genre.
 */
const getMostFrequentGenre = (events) => {
  const genreCounts = {};

  events.forEach((event) => {
    const genre = event.genre; // Adjust this according to your data structure.
    if (genreCounts[genre]) {
      genreCounts[genre]++;
    } else {
      genreCounts[genre] = 1;
    }
  });

  let mostFrequentGenre = '';
  let maxCount = 0;

  for (const genre in genreCounts) {
    if (genreCounts[genre] > maxCount) {
      mostFrequentGenre = genre;
      maxCount = genreCounts[genre];
    }
  }

  return mostFrequentGenre;
};

/**
 * The `CityEventsChart` component displays a scatter chart of event counts in different cities.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.events - An array of event data.
 * @param {Array} props.allLocations - An array of all available city locations.
 * @returns {JSX.Element} The rendered CityEventsChart component.
 */
const CityEventsChart = ({events, allLocations}) => {
    const [data, setData] = useState([]);

    // get data only when events change
    useEffect(() => {
        setData(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [`${events}`]);

    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const genreColors = {
      React: "#003F5C",
      JavaScript: "#58508D",
      Node: "#BC5090",
      jQuery: "#FF6361",
      Angular: "#FFA600",
      default: "#000000"
    };

  
    const getSize = (diversity) => {
      // Define a function to map diversity to dot size within a range
      // You can adjust the range according to your preference
      const minSize = 5;
      const maxSize = 20;
      const maxDiversity = 10; // Max diversity value for the largest dot
      const size = (diversity / maxDiversity) * (maxSize - minSize) + minSize;
      return size;
    };

    /**
     * Get the number of events in each city and format the data for the scatter chart.
     * @returns {Array} An array of objects with city and event count data.
     */
    const getData = () => {
        const data = allLocations.map((location) => {
          const count = events.filter((event) => event.location === location).length;
          const city = location.split((/, | - /))[0];
          const eventsInCity = events.filter((event) => event.location === location);
          const genre = getMostFrequentGenre(eventsInCity);

          // Calculate diversity (replace this with your own diversity calculation logic)
          const diversity = eventsInCity.length;

          // Get the size of the dot based on diversity
          const size = getSize(diversity);

          return {count, city, genre, size, diversity};
        })
        return data;
    }

    return (
        <ResponsiveContainer width="99%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 60,
            left: -30,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="City" angle={60} interval={0} tick={{dx: 20, dy: 40, fontSize: 14}} />
          <YAxis type="number" dataKey="count" name="Number of events" allowDecimals={false}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{color: "black", backgroundColor: "#7C9D96", borderRadius: "10px", display: "flex", justifyContent: "center", border: "none", padding: "3px"}}/>
          <Scatter name="A school" data={data} fill={(entry) => genreColors[entry.genre] || genreColors.default} />
        </ScatterChart>
      </ResponsiveContainer>
    )
}

export default CityEventsChart;