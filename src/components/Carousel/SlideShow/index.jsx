import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon from './settings.svg';
import styles from './SlideShow.module.scss';
import cx from 'classnames';

class SlideShow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisibleSettings: false,
      delay: this.props.delay,
    };
  }

  changeVisible = () => {
    const { isVisibleSettings } = this.state;
    this.setState({ isVisibleSettings: !isVisibleSettings });
  };
  inputHandler = ({ target: { value } }) => {
    if (/^\d*$/gm.test(value)) {
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
    const { ruleSlideShow, isSlideShow } = this.props;
    const { isVisibleSettings, delay } = this.state;
    const settings = cx(styles.settings, {
      [styles.invisible]: !isVisibleSettings,
    });
    return (
      <div>
        <div className={styles.container}>
          <button className={styles.btn} onClick={ruleSlideShow}>
            {isSlideShow ? 'Stop slideshow' : 'Slideshow'}
          </button>
          <button className={styles.btnSettings} onClick={this.changeVisible}>
            <img src={icon} alt='setting icon' />
          </button>
        </div>

        <form onSubmit={this.submitHandler} className={settings}>
          <label>
            SlideShow delay:
            <input type='text' value={delay} onChange={this.inputHandler} />s
          </label>
          <input type='submit' value='Change' />
        </form>
      </div>
    );
  }
}

SlideShow.propTypes = {
  delay: PropTypes.number,
  ruleSlideShow: PropTypes.func,
  isSlideShow: PropTypes.bool,
  changeDelay: PropTypes.func,
};
export default SlideShow;
