import React, { useEffect, useState } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/ImageSlider.css';

export default function ImageSlider({ url, limit, page }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
                console.log(data);
            }

        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    }
    //The useEffect hook runs when the component mounts or when the url prop changes.
    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
        // The dependency array [url] indicates that this effect will run only when the url prop changes. If url changes, the effect is triggered; otherwise, it doesn't run again.s
    }, [url]);


    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? setCurrentSlide(0) : currentSlide + 1);
    };

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (loading) {
        return <div className='text-center'>Loading...</div>;
    }
    if (error) {
        return <div className='text-center'>Error occurred: {error}</div>;
    }

    return (
        <center className="container text-center slider-container my-5">

            <div className="d-flex justify-content-center align-items-center mb-3">

                <BsArrowLeftCircleFill onClick={handlePrevSlide} className="arrow-icon" />
                {images && images.length > 0 &&
                    <img
                        key={images[currentSlide].id}
                        alt={images[currentSlide].download_url}
                        src={images[currentSlide].download_url}
                        className="current-slide"
                    />
                }
                <BsArrowRightCircleFill onClick={handleNextSlide} className="arrow-icon" />
            </div>

            <div className="d-flex justify-content-center">

                {images && images.length > 0 &&
                    images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`indicator-button ${index === currentSlide ? 'active' : ''}`}
                        />
                    ))
                }
            </div>

        </center>
    );
}
