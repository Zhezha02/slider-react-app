import React, { Component } from 'react';
import Slide from './Slide';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }
  get nextIndex() {
    const{currentSlide} = this.state;
    const{imageDB} = this.props;
    console.log(imageDB);
    return (currentSlide + 1) % imageDB.length;
  }
  get prevIndex() {
    const{currentSlide} = this.state;
    const{imageDB} = this.props;
    return (currentSlide - 1 + imageDB.length) % imageDB.length;
  }
  handleBtnPrev = () => {
    this.setState({currentSlide: this.prevIndex});
    console.log(this.state);

  };
  handleBtnNext = () => {
    this.setState({currentSlide: this.nextIndex});
  };

  render() {
    const {currentSlide} = this.state;
    const { image, title, description } = this.props.imageDB[currentSlide];
    return (
      <div>
        <Slide image={image} title={title} description={description} />
        <button onClick={this.handleBtnPrev}> {'<'} </button>
        <button onClick={this.handleBtnNext}> {'>'} </button>
      </div>
    );
  }
}

export default Carousel;
