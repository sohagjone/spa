import React from 'react';


export const LineElement = ({ text }) => {
    return (
      <div className="lineTextBox">
        <div className="line"></div>
        <div className="text">
          {text}
        </div>
      </div>
    );
  };

  export default LineElement