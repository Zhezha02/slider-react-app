import React, { Component } from 'react';
import Slide from './Slide';
import styles from './Carousel.module.scss';
import SlideShow from './SlideShow';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      intervalId: null,
    };
  }
  get nextIndex() {
    const { currentSlide } = this.state;
    const { imageDB } = this.props;
    return (currentSlide + 1) % imageDB.length;
  }
  get prevIndex() {
    const { currentSlide } = this.state;
    const { imageDB } = this.props;
    return (currentSlide - 1 + imageDB.length) % imageDB.length;
  }
  handlePrevSlide = () => {
    this.setState({ currentSlide: this.prevIndex });
  };
  handleNextSlide = () => {
    this.setState({ currentSlide: this.nextIndex });
  };

  startSlideShow = (interval = 1) => {
    const convertToMilliseconds = (seconds) => seconds * 1000;
    this.setState({
      intervalId: setInterval(this.handleNextSlide, convertToMilliseconds(interval)),
    });
  };

  stopSlideShow = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ intervalId: null });
  };

  render() {
    const { currentSlide, intervalId } = this.state;
    const { imageDB } = this.props;
    return (
      <div className={styles.wrapper}>
        <Slide
        slide={imageDB[currentSlide]}
          prevBtn={this.handlePrevSlide}
          nextBtn={this.handleNextSlide}
        />
        <SlideShow
          btnHandlers={[this.startSlideShow, this.stopSlideShow]}
          intervalId={intervalId}
        />
      </div>
    );
  }
}


Carousel.propTypes = {
  imageDB:PropTypes.array
}
export default Carousel;
