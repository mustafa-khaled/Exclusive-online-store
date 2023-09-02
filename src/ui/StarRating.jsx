import React from "react";

const StarRating = ({ ratingsAverage }) => {
  const fullStars = Math.floor(ratingsAverage);

  const stars = [];

  // Loop to generate 5 stars
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      // If the current star index is less than the number of full stars, make it yellow
      stars.push(
        <i key={i} className="fa-solid fa-star text-sm text-yellow-500"></i>,
      );
    } else {
      // Otherwise, make it gray
      stars.push(
        <i key={i} className="fa-regular fa-star text-sm text-gray"></i>,
      );
    }
  }

  return <div className="star-rating flex">{stars}</div>;
};

export default StarRating;
