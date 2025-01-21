import React, { useState, useEffect } from 'react';

const ProgressBar = ({ negativePercentage, positivePercentage, neutralPercentage }) => {
  return (
    <div className="w-full h-2 border border-gray-300 rounded-md overflow-hidden mb-6">
      <div
        className="h-full float-left"
        style={{
          width: `${negativePercentage}%`,
          backgroundColor: '#FF0000',
        }}
      ></div>
      <div
        className="h-full float-left"
        style={{
          width: `${positivePercentage}%`,
          backgroundColor: '#006400',
        }}
      ></div>
      <div
        className="h-full float-left"
        style={{
          width: `${neutralPercentage}%`,
          backgroundColor: '#90EE90',
        }}
      ></div>
    </div>
  );
};

const FeedbackSummary = ({ positiveCount, negativeCount, neutralCount }) => {
  return (
    <div className="flex justify-between  text-gray-700 text-sm w-full space-x-6">
      <p>
        Positive: <span className="font-semibold">{positiveCount}</span>
      </p>
      <p>
        Negative: <span className="font-semibold">{negativeCount}</span>
      </p>
      <p>
        Neutral: <span className="font-semibold">{neutralCount}</span>
      </p>
    </div>
  );
};

const CommunityFeedback = () => {
  const [negativeCount, setNegativeCount] = useState(10);
  const [positiveCount, setPositiveCount] = useState(70);
  const [neutralCount, setNeutralCount] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://3.227.101.169:8020/api/v1/sample_assignment_api_5/',
          {
            headers: {
              Authorization: 'Basic ' + btoa('trial:assignment123'),
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setNegativeCount(responseData.negative || 10);
        setPositiveCount(responseData.positive || 70);
        setNeutralCount(responseData.neutral || 20);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate percentages
  const total = negativeCount + positiveCount + neutralCount;
  const negativePercentage = (negativeCount / total) * 100;
  const positivePercentage = (positiveCount / total) * 100;
  const neutralPercentage = (neutralCount / total) * 100;

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-3xl mx-auto">
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="text-center">
          <h4 className="text-xl font-bold text-gray-800 mb-6">Community Feedback</h4>
          <ProgressBar
            negativePercentage={negativePercentage || 10}
            positivePercentage={positivePercentage || 70}
            neutralPercentage={neutralPercentage || 20}
          />
          <FeedbackSummary
            positiveCount={positiveCount || 70}
            negativeCount={negativeCount || 10}
            neutralCount={neutralCount || 20}
          />
        </div>
      )}
    </div>
  );
};

export default CommunityFeedback;
