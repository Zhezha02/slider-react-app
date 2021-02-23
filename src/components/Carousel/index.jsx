import React, { Component } from 'react';
import Slide from './Slide';
import styles from './Carousel.module.scss';
import SlideShow from './SlideShow';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSlide: 0,
      timeOutId: null,
      slideShowDelay: 1,
      isImgLoad: false,
      isSlideShow: false,
    };
    this.timeOutId = null;
  }
  get nextIndex () {
    const { currentSlide } = this.state;
    const { imageDB } = this.props;
    return (currentSlide + 1) % imageDB.length;
  }
  get prevIndex () {
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

  startSlideShow = slideShowDelay => {
    const { isSlideShow } = this.state;
    this.setState({ isSlideShow: !isSlideShow });
    this.timeOutId = setTimeout(this.handleNextSlide, slideShowDelay * 1000);
  };
  slideShowNext = () => {
    const { slideShowDelay } = this.state;
    clearTimeout(this.timeOutId);
    this.timeOutId = setTimeout(() => {
      this.setState(() => ({ isImgLoad: false }));
      this.handleNextSlide();
      // this.isImgLoad=false;
    }, slideShowDelay * 1000);
  };
  stopSlideShow = () => {
    const { isSlideShow } = this.state;
    clearTimeout(this.timeOutId);
    this.timeOutId = null;
    this.setState({ isSlideShow: !isSlideShow });
  };
  imgLoad = () => {
    console.log('before', this.state.isImgLoad);
    this.setState({ isImgLoad: true });
  };
  changeDelay = newValue => {
    this.setState({ slideShowDelay: newValue });
  };

  componentDidUpdate ({}, { currentSlide: prevSlide }) {
    const { isSlideShow, isImgLoad, currentSlide } = this.state;
    console.log('isImgLoad/currentSlide', isImgLoad, this.state.currentSlide);
    console.log(isImgLoad, isSlideShow);
    console.log(isImgLoad && isSlideShow);
    if (prevSlide === currentSlide && isSlideShow && isImgLoad) {
      this.slideShowNext();
    }
  }
  render () {
    const { currentSlide, slideShowDelay, isSlideShow } = this.state;
    const { imageDB } = this.props;
    return (
      <div className={styles.wrapper}>
        <Slide
          slide={imageDB[currentSlide]}
          prevBtn={this.handlePrevSlide}
          nextBtn={this.handleNextSlide}
          imgLoad={this.imgLoad}
          isSlideShow={isSlideShow}
          slideShowDelay={slideShowDelay}
        />
        <SlideShow
          btnHandlers={[
            this.startSlideShow,
            this.stopSlideShow,
            this.slideShowNext,
          ]}
          isSlideShow={isSlideShow}
          changeDelay={this.changeDelay}
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  imageDB: PropTypes.array,
};
export default Carousel;
