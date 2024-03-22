import React, { useState, useEffect } from 'react';

const ProgressBar = ({ negativePercentage, positivePercentage, neutralPercentage }) => {
  return (
    <div style={{ width: '80%', height: '8px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
      <div style={{ height: '100%', float: 'left', width: `${negativePercentage}%`, backgroundColor: '#FEA7A9' }}></div>
      <div style={{ height: '100%', float: 'left', width: `${positivePercentage}%`, backgroundColor: '#FECC8E' }}></div>
      <div style={{ height: '100%', float: 'left', width: `${neutralPercentage}%`, backgroundColor: '#75C194' }}></div>
    </div>
  );
};

const FeedbackSummary = ({ positiveCount, negativeCount, neutralCount }) => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <p>Positive: {positiveCount}</p>
        <p>Negative: {negativeCount}</p>
        <p>Neutral: {neutralCount}</p>
      </div>
    </div>
  );
};

const CommunityFeedback = () => {
  const [negativeCount, setNegativeCount] = useState(null);
  const [positiveCount, setPositiveCount] = useState(null);
  const [neutralCount, setNeutralCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.227.101.169:8020/api/v1/sample_assignment_api_5/', {
          headers: {
            'Authorization': 'Basic ' + btoa('trial:assignment123')
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setNegativeCount(responseData.negative);
        setPositiveCount(responseData.positive);
        setNeutralCount(responseData.neutral);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Calculate percentages
  const total = negativeCount + positiveCount + neutralCount;
  const negativePercentage = (negativeCount / total) * 100;
  const positivePercentage = (positiveCount / total) * 100;
  const neutralPercentage = (neutralCount / total) * 100;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h4>Community Feedback</h4>
          <ProgressBar
            negativePercentage={negativePercentage}
            positivePercentage={positivePercentage}
            neutralPercentage={neutralPercentage}
          />
          <FeedbackSummary
            positiveCount={positiveCount}
            negativeCount={negativeCount}
            neutralCount={neutralCount}
          />
        </div>
      )}
    </div>
  );
};

export default CommunityFeedback;
