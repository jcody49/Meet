import { useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

    /**
     * Get the number of events in each city and format the data for the scatter chart.
     * @returns {Array} An array of objects with city and event count data.
     */
    const getData = () => {
        const data = allLocations.map((location) => {
            const count = events.filter((event) => event.location === location).length;
            const city = location.split((/, | - /))[0];
            return {count, city};
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
          <Scatter name="A school" data={data} fill="#7C9D96" />
        </ScatterChart>
      </ResponsiveContainer>
    )
}

export default CityEventsChart;