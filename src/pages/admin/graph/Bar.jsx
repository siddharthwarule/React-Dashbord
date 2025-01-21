import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: '',
      tickValues: [0, 20, 40, 60, 80, 100],
      tickFormat: (value) => `${value}`,
    },
  ],
  width: 900,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const dataset = [
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Jan',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Feb',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Mar',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Apr',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'May',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Jun',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Jul',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Aug',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Sep',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Oct',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Nov',
  },
  {
    totalUsers: Math.floor(Math.random() * 91) + 10,
    activeUsers: Math.floor(Math.random() * 91) + 10,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}`;

export default function BarAnimation() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">User Statistics</h2>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'totalUsers', label: 'Total Users', valueFormatter },
          { dataKey: 'activeUsers', label: 'Active Users', valueFormatter },
        ]}
        animation={{ enabled: true, duration: 500, easing: 'ease-out' }}
        {...chartSetting}
      />
    </div>
  );
}
