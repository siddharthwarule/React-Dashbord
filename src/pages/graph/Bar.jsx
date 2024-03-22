import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: '',
      tickValues: [0, 5000, 10000, 15000, 20000],
      tickFormat: (value) => {
        if (value === 0) return '0';
        if (value === 5000) return '5k';
        if (value === 10000) return '10k';
        if (value === 15000) return '15k';
        if (value === 20000) return '20k';
        return '';
      },
    },
  ],
  width: 600,
  height: 240,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const dataset = [
  {
    lastyear: 5000,
    thisyear: 6000,
    month: 'Jan',
  },
  {
    lastyear: 10000,
    thisyear: 2000,
    month: 'Feb',
  },
  {
    lastyear: 20000,
    thisyear: 40000,
    month: 'Mar',
  },
  {
    lastyear: 32000,
    thisyear: 21000,
    month: 'Apr',
  },
  {
    lastyear: 12000,
    thisyear: 9200,
    month: 'May',
  },
  {
    lastyear: 1300,
    thisyear: 8700,
    month: 'Jun',
  }
];

const valueFormatter = (value) => `${value}`;

export default function BarAnimation() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'lastyear', label: 'Last Year', valueFormatter },
        { dataKey: 'thisyear', label: 'This Year', valueFormatter },
      ]}
      animation={{ enabled: true, duration: 500, easing: 'ease-out' }}
      {...chartSetting}
    />
  );
}
