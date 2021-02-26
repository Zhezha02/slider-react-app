import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.duration,
    };
    this.timeoutId = null;
  }
  step = () =>
    this.setState(({ value }) => {
      const newTime = new Date(value.getTime());
      newTime.setSeconds(value.getSeconds() - 1);

      return {
        value: newTime,
      };
    });
  clearId = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };
  // {
  //   this.setState(({ value }) => {
  //     return { value: value - 1 };
  //   });
  // };
  resetTimer = () => {
    this.clearId();
    this.setState({ value: this.props.duration });
  };
  componentDidUpdate() {
    const { isAutoClick, stopAutoClick } = this.props;
    const { value } = this.state;
    this.clearId();
    do {
      this.timeoutId = setTimeout(this.step, 1000);
    } while (isAutoClick && value.getSeconds() > 0);
    stopAutoClick();

    // if () {
    // }
    // if (value.getSeconds() === 0) {
    // }
  }
  render() {
    const { value } = this.state;
    return <div>{value.toLocaleTimeString('it-IT')} s</div>;
  }
}

Timer.defaultProps = {
  duration: new Date(0, 0, 0, 0, 0, 5, 0),
};
Timer.propTypes = {
  duration: PropTypes.instanceOf(Date),
  isAutoClick: PropTypes.bool,
  stopAutoClick: PropTypes.func,
};
export default Timer;
