import React, { Component } from 'react';
import Slide from './Slide';
import styles from './Carousel.module.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
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
  handleBtnPrev = () => {
    this.setState({ currentSlide: this.prevIndex });
  };
  handleBtnNext = () => {
    this.setState({ currentSlide: this.nextIndex });
  };

  render() {
    const { currentSlide } = this.state;
    const { image, title, description } = this.props.imageDB[currentSlide];
    return (
      <div className={styles.wrapper}>
        <Slide
          image={image}
          title={title}
          description={description}
          prevBtn={this.handleBtnPrev}
          nextBtn={this.handleBtnNext}
        />
      </div>
    );
  }
}

export default Carousel;
