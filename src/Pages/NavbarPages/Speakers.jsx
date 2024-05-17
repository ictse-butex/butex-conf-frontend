import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Speakers = () => {
    return (
    <div className="carousel-wrapper w-4/5 max-h-fit pt-5 m-auto"  style={{
    }}>
        <Carousel autoPlay={true} className='h-1/2'>
            {[...Array(17)].map((_, index) => (
            <div key={index} className='h-1/2'>
                <img src={`https://ictsebutex.com/assets/speakers/${index}.jpg`} />
            </div>
            ))}
        </Carousel>
    </div>
      );
};

export default Speakers;