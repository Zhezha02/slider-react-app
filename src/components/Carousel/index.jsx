import React, { Component } from 'react';
import Slide from './Slide';
import styles from './Carousel.module.css';
import SlideShow from './SlideShow';

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
    const { image, title, description } = this.props.imageDB[currentSlide];
    return (
      <div className={styles.wrapper}>
        <Slide
          image={image}
          title={title}
          description={description}
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

export default Carousel;
