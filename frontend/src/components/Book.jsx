import React, { useState } from 'react';

const AddEbook = ({ title, author, image }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="book" onClick={handleClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>Clicked: {clickCount} times</p>
      <a href="#" className="read-more">Read More</a>
    </div>
  );
};

export default AddEbook;
