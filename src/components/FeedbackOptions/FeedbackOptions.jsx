import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options,
    onLeaveFeedbackGood,
    onLeaveFeedbackNetural,
    onLeaveFeedbackBad }) => {
  return (
    <div>
          {options.map((option) => (
          
              <button key={option} onClick={() => {
                  if (option ==='Good') {
                      onLeaveFeedbackGood();
                  } else if (option === 'Neutral') {
                      onLeaveFeedbackNetural();
                  } else if (option === 'Bad') {
                      onLeaveFeedbackBad();
                  }
              }}>
            
               {option}   
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: 
        PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedbackGood:
        PropTypes.func.isRequired,
    onLeaveFeedbackNetural:
        PropTypes.func.isRequired,
    onLeaveFeedbackBad:
    PropTypes.func.isRequired,
  
}

export default FeedbackOptions;