import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour">
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>
        {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <p className="price">${tour.price}</p>
      <button onClick={() => onDelete(tour.id)}>Delete</button>
    </div>
  );
};

export default Tour;
