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
    const { changeDelay } = this.props;
    const { delay } = this.state;
    changeDelay(delay);
  };
  render () {
    const {
      btnHandlers: [startSlideShow, stopSlideShow],
      isSlideShow,
    } = this.props;
    const { isVisibleSettings, delay } = this.state;
    return (
      <div className={styles.container}>
        <button className={styles.settings} onClick={this.changeVisible}>
          <img  src={icon} alt='setting icon' />
        </button>
        {isSlideShow ? (
          <button className={styles.btn} onClick={stopSlideShow}>Stop slideshow</button>
        ) : (
          <button className={styles.btn} onClick={startSlideShow}>Slideshow</button>
        )}
        {isVisibleSettings && (
          <form onSubmit={this.submitHandler}>
            <label>
              SlideShow delay:
              <input type='text' value={delay} onChange={this.inputHandler} />s
            </label>
            <input  type='submit' value='Change' />
          </form>
        )}
      </div>
    );
  }
}

SlideShow.propTypes = {
  btnHandlers: PropTypes.arrayOf(PropTypes.func),
  isSlideShow: PropTypes.bool,
  changeDelay: PropTypes.func,
};
export default SlideShow;


