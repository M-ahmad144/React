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
                const starRating = index + 1;
                return (
                    <FaStar
                        key={index}

                        // Check if the index of the star is less than the hover or rating
                        // If true, apply the 'active' class to all stars with an index less than the hover or rating value; otherwise, apply the 'inactive' class

                        //map function ensures that the logic is applied to all stars in the list, updating their classes dynamically based on the hover or rating condition for each star's index.

                        className={index < (hover || rating) ? 'active' : 'inactive'}


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
