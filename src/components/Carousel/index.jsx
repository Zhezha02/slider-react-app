import React, { Component } from 'react';
import Slide from './Slide';
import styles from './Carousel.module.css';

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

  startSlideShow = () => {
    this.setState({ intervalId: setInterval(this.handleNextSlide, 2000) });
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
        {intervalId ? (
          <button onClick={this.stopSlideShow}>Stop slideshow</button>
        ) : (
          <button onClick={this.startSlideShow}>Slideshow</button>
        )}
      </div>
    );
  }
}

export default Carousel;
