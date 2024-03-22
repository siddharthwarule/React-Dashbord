import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import './meter.css'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100px', // Adjust the width of the progress bar
    height: '150px', // Adjust the height of the progress bar
    overflow: 'hidden',
  },
  progress: {
    position: 'absolute',
    bottom: '0', // Start the progress from the bottom
    left: '0',
  },
});

const ProgressComponent = () => {
  const [progress, setProgress] = useState(40); // Initial progress value
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        value={progress} // Set the current progress value
        size={100} // Adjust the size of the progress bar
        thickness={4} // Adjust the thickness of the progress line
        className={classes.progress}
        style={{ color: 'blue', transform: 'rotate(180deg)' }} // Rotate the progress bar 90 degrees clockwise
      />
      <div class="progress-count" >78</div>
      <div class="progress-count-from" >of 100 points</div>
    </div>
  );
};

export default ProgressComponent;
