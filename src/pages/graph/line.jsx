import * as React from 'react';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot } from '@mui/x-charts/LineChart';
import { Box, Typography } from '@mui/material';

const pData1 = [2000, 1500, 3500, 2700, 3780, 3080, 4400];
const pData2 = [2000, 1800, 3000, 2500, 3500, 3000, 4000];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function TinyLineChart() {
  return (
    <Box>
      <ChartContainer
        width={500}
        height={300}
        series={[
          { type: 'line', data: pData1 },
          { type: 'line', data: pData2 }
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 4, // Making the lines broader
          },
          '.MuiMarkElement-root': {
            display: 'none', // Hiding the marks
          },
          '.MuiLineElement-root:nth-of-type(1)': { // dark blue line
            stroke: '#0052CC',
          },
          '.MuiLineElement-root:nth-of-type(2)': { // faint blue line
            stroke: '#B3D4FC',
          },
          '.MuiChartAxis-root.MuiChartAxis-xAxis .MuiTypography-root': { // Adjusting axis labels
            fontSize: '12px',
            color: '#333', // Dark gray color
          },
        }}
        disableAxisListener
      >
        <LinePlot />
      </ChartContainer>
      <div style={{ display: 'flex',marginTop:"-50px", marginBottom:"5px" ,marginLeft:"40px" }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#0052CC', marginRight: '10px' }}></div>
          <Typography style={{fontWeight: '800', color:'gray',  fontSize:'13px'}}  variant="body1">Online Salling</Typography>        
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#B3D4FC', marginRight: '5px' }}></div>
          <Typography style={{fontWeight: '800', color:'gray',  fontSize:'13px'}}  variant="body1">Offline Salling</Typography>
        </div>
      </div>
    </Box>
    
  );
}
