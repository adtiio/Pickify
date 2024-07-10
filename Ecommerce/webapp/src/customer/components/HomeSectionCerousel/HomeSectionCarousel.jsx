import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  const slidePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, items.length - Math.floor(responsive[1024].items)));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  useEffect(() => {
    console.log('Active Index Changed:', activeIndex);
  }, [activeIndex]);

  return (
    <div className='border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />

        {activeIndex < items.length - Math.floor(responsive[1024].items) && (
          <Button
            variant='contained'
            className='z-50 bg-white'
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white'
            }}
            aria-label='next'
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant='contained'
            onClick={slidePrev}
            className='z-50 bg-white'
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(-50%) rotate(-90deg)',
              bgcolor: 'white'
            }}
            aria-label='previous'
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
