
import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import './App.css';

const App = () => {
  const [feedbackGood, setFeedbackGood] = useState(0);
  const [feedbackNetural, setFeedbackNetural] = useState(0);
  const [feedbackBad, setFeedbackBad] = useState(0);

  const handleFeedbackClickGood = () => {
    setFeedbackGood((prevfeedbackGood) => 
       prevfeedbackGood + 1);
  };
  
   const handleFeedbackClickNetural = () => { 
     setFeedbackNetural((prevFeedbackNetural) =>
       prevFeedbackNetural + 1);
   };
  
  const handleFeedbackClickBad = () => {
    setFeedbackBad((prevFeedbackBad) => 
      prevFeedbackBad + 1);
  };
  

  const countTotalFeedback = () => {
    return feedbackGood + feedbackNetural + feedbackBad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedback = (feedbackGood / total) * 100;
    return Math.round(positiveFeedback);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const hasFeedback = totalFeedback > 0;
  

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedbackGood={handleFeedbackClickGood}
          onLeaveFeedbackNetural={handleFeedbackClickNetural}
          onLeaveFeedbackBad={handleFeedbackClickBad}
        />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={feedbackGood}
            neutral={feedbackNetural}
            bad={feedbackBad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );

};
export default App;