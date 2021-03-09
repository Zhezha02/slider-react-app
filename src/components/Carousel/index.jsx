import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import styles from './Carousel.module.scss';
import SlideShow from './SlideShow';
import PropTypes from 'prop-types';

const Carousel = props => {
  const { imageDB } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [isImgLoad, setIsImgLoad] = useState(false);
  const [delay, setDelay] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + imageDB.length) % imageDB.length);
  };
  const handleNextSlide = () =>
    setCurrentSlide((currentSlide + 1) % imageDB.length);

  const ruleSlideShow = () => {
    setIsSlideShow(!isSlideShow);
  };

  const imgLoad = () => setIsImgLoad(true);

  const changeDelay = newValue => setDelay(Number(newValue));

  useEffect(() => {
    setIsImgLoad(false);
  }, [currentSlide]);

  useEffect(() => {
    if (isSlideShow && isImgLoad) {
      const id = setInterval(handleNextSlide, delay * 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [isSlideShow, isImgLoad]);

  return (
    <div className={styles.wrapper}>
      <Slide
        slide={imageDB[currentSlide]}
        prevBtn={handlePrevSlide}
        nextBtn={handleNextSlide}
        imgLoad={imgLoad}
        />
      <SlideShow
        delay={delay}
        ruleSlideShow={ruleSlideShow}
        isSlideShow={isSlideShow}
        changeDelay={changeDelay}
      />
    </div>
  );
};

Carousel.propTypes = {
  imageDB: PropTypes.array,
};

export default Carousel;
