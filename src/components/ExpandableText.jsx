import React, { useState } from 'react';

const ExpandableText = ({ children, maxChars = 50 }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedText = children.slice(0, maxChars);
  const remainingText = children.slice(maxChars);

  return (
    <div>
      {expanded ? (
        <div>
          {children} 
          <button onClick={toggleExpanded} className=' text-indigo-800'>See less</button>
        </div>
      ) : (
        <div>
          {truncatedText} 
          {children.length > maxChars && <button onClick={toggleExpanded} className=' text-indigo-800'>... See more</button>}
        </div>
      )}
    </div>
  );
};

export default ExpandableText;
