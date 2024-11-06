import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
    // Array of image URLs stored in the public/images folder
    const images = [
        '/images/free-nature-images.jpg',
        '/images/MainAfter.jpg',
        '/images/subhome-ai.jpeg'
    ];

    console.log(images); // Debug: Check if the images array is correct


    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {images.map((url, index) => (
                <div key={index}>
                    <img
                        src={url}
                        alt={`Slide ${index}`}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
