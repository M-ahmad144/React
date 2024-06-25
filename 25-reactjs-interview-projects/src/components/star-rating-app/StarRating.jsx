import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/StarRatingStyle.css";

function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0); // State to store the selected rating
    const [hover, setHover] = useState(0);   // State to track the hovered star

    // Handle click on a star to set the rating
    const handleClick = (selectedRating) => {
        setRating(selectedRating);
    };

    // Handle mouse move over a star to set the hover state
    const handleMouseMove = (selectedRating) => {
        setHover(selectedRating);
    };

    // Handle mouse leave from the star to reset hover state
    const handleMouseLeave = () => {
        setHover(0);
    };

    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            {[...Array(noOfStars)].map((_, index) => {
                const starRating = index + 1;//star rating from 1
                return (
                    <FaStar
                        key={index}
                        className={index < (hover || rating) ? 'active' : 'inActive'}
                        size={100}
                        style={{ fontSize: "48px", cursor: "pointer" }}
                        onClick={() => handleClick(starRating)}
                        onMouseMove={() => handleMouseMove(starRating)}
                        onMouseLeave={handleMouseLeave}
                    />
                );
            })}
        </div>
    );
}

export default StarRating;
