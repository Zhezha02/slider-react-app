import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon from './settings.svg';
import styles from './SlideShow.module.scss';

class SlideShow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisibleSettings: false,
      delay: null,
    };
  }

  changeVisible = () => {
    const { isVisibleSettings } = this.state;
    this.setState({ isVisibleSettings: !isVisibleSettings });
  };
  inputHandler = ({ target: { value } }) => {
    if (/^\d+$/gm.test(value)) {
      this.setState({ delay: value });
    }
  };
  submitHandler = e => {
    e.preventDefault();
    const { changeSlideShowDelay } = this.props;
    const { delay } = this.state;
    changeSlideShowDelay(delay);
  };
  render () {
    const {
      btnHandlers: [startSlideShow, stopSlideShow],
      isSlideShow,
    } = this.props;
    const { isVisibleSettings, delay } = this.state;
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
          <form onSubmit={this.submitHandler}>
            <label>
              SlideShow delay:
              <input type='text' value={delay} onChange={this.inputHandler} />s
            </label>
            <input type='submit' value='Change' />
          </form>
        )}
      </>
    );
  }
}

SlideShow.propTypes = {
  btnHandlers: PropTypes.arrayOf(PropTypes.func),
  isSlideShow: PropTypes.bool,
  changeDelay: PropTypes.func,
};
export default SlideShow;


