import { useState, useEffect } from "react";
import { ResponsiveContainer, Pie, Tooltip, PieChart, Cell } from "recharts";

/**
 * The `EventGenresChart` component displays a pie chart showing the distribution of events by genres.
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.events - The list of events to be visualized in the pie chart.
 * @returns {JSX.Element} The rendered EventGenresChart component.
 */
const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const colors = ["#003F5C", "#58508D", "#BC5090", "#FF6361", "#FFA600"];
  
    useEffect(() => {
        setData(getData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [`${events}`]);
  
    /**
     * Get the data for the pie chart, representing the number of events for each genre.
     * @returns {Array} An array of objects containing genre name and event count.
     */
    const getData = () => {//find out how many events there are for each genre
      const data = genres.map((genre) => {//loop over the genres array
        const filteredEvents = events.filter((event) =>//get a list of events that include the current genre
          event.summary.includes(genre)
        );
        return {
          name: genre,
          value: filteredEvents.length,
        };
      });
      return data;//return the data array variable constructed from genres.map()
    };
  
    /**
     * Render a customized label for each pie chart segment.
     * @param {Object} param0 - Data for the pie chart segment.
     * @param {number} param0.cx - X-coordinate of the center.
     * @param {number} param0.cy - Y-coordinate of the center.
     * @param {number} param0.midAngle - Middle angle.
     * @param {number} param0.outerRadius - Outer radius.
     * @param {number} param0.percent - Percentage.
     * @param {number} param0.index - Index of the segment.
     * @returns {JSX.Element|null} The rendered label or null if percent is falsy.
     */
    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
      const RADIAN = Math.PI / 180;
      const radius = outerRadius;
      const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
      const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
      return percent ? (
        <text
          x={x}
          y={y}
          fill="black"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
        </text>
      ) : null;
    };
  
    //pie chart UI 
    return (
      <ResponsiveContainer width="99%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            fill="#8884d8"
            labelLine={false}
            label ={renderCustomizedLabel}
            outerRadius={130}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  };
  
  export default EventGenresChart;