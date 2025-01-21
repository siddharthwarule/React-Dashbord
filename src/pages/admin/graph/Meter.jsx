import React, { useState ,useEffect } from 'react';
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
 
  const classes = useStyles();


  const [score, setScore] = useState(0);
 
 

  const [progress, setProgress] = useState(0); // Initial progress value


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://3.227.101.169:8020/api/v1/sample_assignment_api_3/', {
          headers: {
            'Authorization': 'Basic ' + btoa('trial:assignment123')
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setProgress(responseData.score/2);
       
        setScore(responseData.score);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
     
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after initial render


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
      <div class="progress-count" >{score}</div>
      <div class="progress-count-from" >of 100 points</div>
    </div>
  );
};

export default ProgressComponent;
