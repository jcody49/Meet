import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const EventGenresBarChart = ({ events }) => {
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
  const colors = ["#003F5C", "#58508D", "#BC5090", "#FF6361", "#FFA600"];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [events]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EventGenresBarChart;
