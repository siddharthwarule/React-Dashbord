
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: '',
    },
  ],
  width: 600,
  height:240,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    lastyear: 59,
    thisyear: 57,
    month: 'Jan',
  },
  {
    lastyear: 50,
    thisyear: 52,
    month: 'Fev',
  },
  {
    lastyear: 47,
    thisyear: 53,
    month: 'Mar',
  },
  {
    lastyear: 54,
    thisyear: 56,
    month: 'Apr',
  },
  {
    lastyear: 57,
    thisyear: 69,
    month: 'May',
  },
  {
    lastyear: 60,
    thisyear: 63,
    month: 'June',
  },
  {
    lastyear: 59,
    thisyear: 60,
    month: 'July',
  }
  
];

const valueFormatter = (value) => `${value}$`;

export default function BarAnimation() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'lastyear', label: 'Last Year', valueFormatter },
        { dataKey: 'thisyear', label: 'This Year', valueFormatter },

      ]}
      {...chartSetting}
    />
  );
}