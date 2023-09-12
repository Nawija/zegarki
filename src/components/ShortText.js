import React, { useState } from 'react';

const ShortText = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <p>
      {showFullText ? (
        text
      ) : (
        <>
          {text.slice(0, 110)}
          {text.length > 110 && '... '}
          <button className="ml-2 font-semibold" onClick={toggleFullText}>Czytaj więcej</button>
        </>
      )}
    </p>
  );
};

export default ShortText;
