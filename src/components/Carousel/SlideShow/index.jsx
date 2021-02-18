import React, { Component } from 'react';
import icon from './settings.svg';

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      delay: 1,
    };
  }

  changeVisible = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };
  inputHandler = ({target})=> {
    this.setState({delay: target.value})
  }

  render() {
    const {
      btnHandlers: [startSlideShow, stopSlideShow],
      intervalId,
    } = this.props;
    const { delay, isVisible } = this.state;
    return (
      <>
        {intervalId ? (
          <button onClick={stopSlideShow}>Stop slideshow</button>
        ) : (
          <button
            onClick={() => {
              startSlideShow(delay);
            }}
          >
            Slideshow
          </button>
        )}
        <button onClick={this.changeVisible}>
          <img src={icon} alt='setting icon' />
        </button>
        {isVisible && (
          <div>
            <label>
              SlideShow delay: 
              <input type='text' value={delay} onChange={this.inputHandler}/>
              s
            </label>
          </div>
        )}
      </>
    );
  }
}

export default SlideShow;
