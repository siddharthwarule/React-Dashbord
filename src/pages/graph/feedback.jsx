import React from 'react';

const ProgressBar = () => {
  return (
    
    <div style={{ width: '80%', height: '8px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
      <div style={{ height: '100%', float: 'left', width: '12%', backgroundColor: '#FEA7A9' }}></div>
      <div style={{ height: '100%', float: 'left', width: '34%', backgroundColor: '#FECC8E' }}></div>
      <div style={{ height: '100%', float: 'left', width: '54%', backgroundColor: '#75C194' }}></div>
    </div>
  );
};

const FeedbackSummary = ({ positiveCount, negativeCount, neutralCount }) => {
  return (
    <div>
      <div style={{display:"flex", alignContent:"space-evenly"}}>
        <p>Positive: {positiveCount}</p>
        <p>Negative: {negativeCount}</p>
        <p>Neutral: {neutralCount}</p>
      </div>
    </div>
  );
};

const CommunityFeedback = () => {
  const positiveCount = 150;
  const negativeCount = 50;
  const neutralCount = 30;

  return (
    <div>
        <div> <h4>Community Feedback</h4></div>
      <ProgressBar />
      <FeedbackSummary
        positiveCount={positiveCount}
        negativeCount={negativeCount}
        neutralCount={neutralCount}
      />
    </div>
  );
};

export default CommunityFeedback;
