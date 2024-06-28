import React, { useEffect, useState } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({ url, limit, page }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            setImages(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url) {
            fetchImages(url);
        }
    }, [url, page, limit]);

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? setCurrentSlide(0) : currentSlide + 1);
    };

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    if (loading) {
        return <div className='text-center'>Loading...</div>;
    }
    if (error) {
        return <div className='text-center'>Error occurred: {error}</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center align-items-center">

                <div className="col-1 text-center">
                    <BsArrowLeftCircleFill onClick={handlePrevSlide} size={30} className="text-primary cursor-pointer" />
                </div>

                <div className="col-10 text-center">
                    {images && images.length > 0 && (
                        <img
                            key={images[currentSlide].id}
                            alt={images[currentSlide].download_url}
                            src={images[currentSlide].download_url}
                            className="img-fluid"
                        />
                    )}
                </div>

                <div className="col-1 text-center">
                    <BsArrowRightCircleFill onClick={handleNextSlide} size={30} className="text-primary cursor-pointer" />
                </div>

            </div>
        </div>
    );
}

export default Slider;
