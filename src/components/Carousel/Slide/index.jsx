import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import PropTypes from 'prop-types';
import fullscreen from './fullscreen.svg';
import fullscreenExit from './fullscreenExit.svg';

const Slide = props => {
  const {
    imgLoad,
    slide: { image, title, description },
    prevBtn,
    nextBtn,
  } = props;
  const [isFullScreen, setIsFullScreen] = useState(false);

  const imageElem = useRef(null);

  console.log(document.fullscreenEnabled);
  console.log('isFullScreen', isFullScreen);
  const ruleFullScreen = () => {
    if (!isFullScreen) {
      imageElem.current.requestFullscreen().catch(err => console.log(err));
      setIsFullScreen(true);
    } else {
      document.exitFullscreen().catch(err => console.error(err));
      setIsFullScreen(false);
    }
  };

  return (
    <div>
      <div className={styles.imgWrapper}>
        <div
          className={styles.responsiveHelper}
          onDoubleClick={ruleFullScreen}
          ref={imageElem}
        >
          <img
            onLoad={imgLoad}
            className={classNames(styles.image)}
            src={image}
            alt={title}
          />
          <button className={styles.btnPrev} onClick={prevBtn}>
            {'<'}
          </button>
          <button className={styles.btnNext} onClick={nextBtn}>
            {'>'}
          </button>

          <button className={styles.fullScreenBtn} onClick={ruleFullScreen}>
            <img
              src={isFullScreen ? fullscreenExit : fullscreen}
              alt='fullscreen rule button'
            />
          </button>
        </div>
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

Slide.propTypes = {
  slide: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  prevBtn: PropTypes.func,
  nextBtn: PropTypes.func,
  imgLoad: PropTypes.func,
};

export default Slide;
