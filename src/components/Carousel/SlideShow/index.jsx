import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon from './settings.svg';
import styles from './SlideShow.module.scss';

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleSettings: false,
      // delay: 3,
    };
  }

  changeVisible = () => {
    const { isVisibleSettings } = this.state;
    this.setState({ isVisibleSettings: !isVisibleSettings });
  };
  inputHandler = ({ target }) => {
    const { changeSlideShowDelay } = this.props;
    changeSlideShowDelay(target.value);
  };

  render() {
    const {
      btnHandlers: [startSlideShow, stopSlideShow],
      isSlideShow,
      slideShowDelay,
    } = this.props;
    const { isVisibleSettings } = this.state;
    return (
      <>
        {isSlideShow ? (
          <button onClick={stopSlideShow}>Stop slideshow</button>
        ) : (
          <button onClick={startSlideShow}>Slideshow</button>
        )}
        <button onClick={this.changeVisible}>
          <img src={icon} alt='setting icon' />
        </button>
        {isVisibleSettings && (
          <div>
            <label>
              SlideShow delay:
              <input
                type='text'
                value={slideShowDelay}
                onChange={this.inputHandler}
              />
              s
            </label>
          </div>
        )}
      </>
    );
  }
}

// SlideShow.propTypes = {
//   btnHandlers: PropTypes.arrayOf(PropTypes.func),
//   timeOutId: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
// };
export default SlideShow;
