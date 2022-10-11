import { Tooltip } from 'bootstrap';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const chartinfo = useLoaderData();
  const chart = chartinfo.data;
  return (
    <ResponsiveContainer height={800}>
      <RadialBarChart
        data={chart}
        startAngle={180}
        endAngle={0}
        margin={{ top: 20, right: 70, left: 0, bottom: 0 }}
      >
        <RadialBar
          minAngle={10}
          label={{ fill: '#fff', position: 'left' }}
          clockWise={true}
          dataKey="total"
        />
        <Legend
          iconSize={20}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="top"
          align="right"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
