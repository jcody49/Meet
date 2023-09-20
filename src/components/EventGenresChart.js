import { useState, useEffect } from "react";
import { ResponsiveContainer, Pie, Tooltip, PieChart, Cell } from "recharts";

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const colors = ["#003F5C", "#58508D", "#BC5090", "#FF6361", "#FFA600"];
  
    useEffect(() => {
        setData(getData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [`${events}`]);
  
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