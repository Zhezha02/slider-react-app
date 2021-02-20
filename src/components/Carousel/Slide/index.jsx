import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import PropTypes from 'prop-types';
import { dbStructure } from '../DBStucture.js';
import fullscreen from './fullscreen.svg';
import fullscreenExit from './fullscreenExit.svg';

class Slide extends Component {
  constructor(props) {
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

  render() {
    const {
      slide: { image, title, description },
      prevBtn,
      nextBtn,
    } = this.props;
    const {isFullScreen} = this.state;
    const{imgWrapper, fullScreen} = styles;
    console.log(styles);
    return (
      <div>
        <div className={imgWrapper}>
          <div className={styles.responsiveHelper}>
            <img className={classNames(styles.image, {[fullScreen]: isFullScreen})} src={image} alt={title} />
            <button className={styles.btnPrev} onClick={prevBtn}>
              {'<'}
            </button>
            <button className={styles.btnNext} onClick={nextBtn}>
              {'>'}
            </button>
          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
        <button onClick={this.changeFullScreen}>
          {isFullScreen ? (
            <img src={fullscreen} alt='fullscreen' />
          ) : (
            <img src={fullscreenExit} alt='fullscreen-exit' />
          )}
        </button>
      </div>
    );
  }
}

Slide.propTypes = {
  slide: PropTypes.shape(dbStructure),
  prevBtn: PropTypes.func,
  nextBtn: PropTypes.func,
};

export default Slide;

