import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import PropTypes from 'prop-types';
// import fullscreen from './fullscreen.svg';
// import fullscreenExit from './fullscreenExit.svg';

class Slide extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFullScreen: false,
    };
  }
  changeFullScreen = () => {
    const { isFullScreen } = this.state;
    this.setState({
      isFullScreen: !isFullScreen,
    });
  };
  loadHandler = () => {
    const { isSlideShow, imgLoad } = this.props;
    if (isSlideShow) {
      imgLoad();
    }
  };

  render () {
    console.log();
    const {
      slide: { image, title, description },
      prevBtn,
      nextBtn,
    } = this.props;
    const { isFullScreen } = this.state;
    const { imgWrapper, fullScreen } = styles;
    return (
      <div>
        <div className={imgWrapper}>
          <div className={styles.responsiveHelper}>
            <img
              onLoad={this.loadHandler}
              className={classNames(styles.image, {
                [fullScreen]: isFullScreen,
              })}
              src={image}
              alt={title}
            />
            <button className={styles.btnPrev} onClick={prevBtn}>
              {'<'}
            </button>
            <button className={styles.btnNext} onClick={nextBtn}>
              {'>'}
            </button>
          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {/* <button onClick={this.changeFullScreen}>
          {isFullScreen ? (
            <img src={fullscreen} alt='fullscreen' />
          ) : (
            <img src={fullscreenExit} alt='fullscreen-exit' />
          )}
        </button> */}
      </div>
    );
  }
}

Slide.propTypes = {
  slide: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  prevBtn: PropTypes.func,
  nextBtn: PropTypes.func,
  imgLoad: PropTypes.func,
  slideShowDelay: PropTypes.bool,
  isSlideShow: PropTypes.bool,
};

export default Slide;

/* <Slide
isImgError={false}
/> */
