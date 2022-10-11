import { Tooltip } from 'bootstrap';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const Statistics = () => {
  const chartinfo = useLoaderData();
  const chart = chartinfo.data;
  return (
    <ResponsiveContainer
      className="pt-6 "
      height={600}
      width="100%"
    >
      <LineChart
        data={chart}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
