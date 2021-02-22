import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import PropTypes from 'prop-types';
import fullscreen from './fullscreen.svg';
import fullscreenExit from './fullscreenExit.svg';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      isImgError: this.props.isImgError,
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
    // const { delay } = this.state;
    if (isSlideShow) {
      imgLoad();
    }
    this.setState({ isImgError: false });
    console.log('LOAD');
  };
  errorHandler = () => {
    this.setState({ isImgError: true });
    console.log('ERROR');
  };
  render() {
    console.log();
    const {
      slide: { image, title, description },
      prevBtn,
      nextBtn,
    } = this.props;
    const { isFullScreen, isImgError } = this.state;
    const { imgWrapper, fullScreen } = styles;
    return (
      <div>
        <div className={imgWrapper}>
          <div className={styles.responsiveHelper}>
            {isImgError ? (
              // <div className={styles.error}></div>
              <div></div>
            ) : (
              <img
                onLoad={this.loadHandler}
                onError={this.errorHandler}
                className={classNames(styles.image, {
                  [fullScreen]: isFullScreen,
                })}
                src={image}
                alt={title}
              />
            )}
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

// Slide.propTypes = {
//   slide: PropTypes.shape(dbStructure),
//   prevBtn: PropTypes.func,
//   nextBtn: PropTypes.func,
// };

export default Slide;
