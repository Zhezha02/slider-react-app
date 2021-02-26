import React from 'react';
import styles from './Counter.module.scss';
import icon from './settingsIcon.svg';
import CounterSettings from './CounterSettings';
import Timer from './Timer';
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isIncrease: true,
      step: this.props.step,
      isSettings: false,
      // clickerId: null,
      autoClickStep: 1,
      autoClickPeriod: 1,
      // autoClickDuration: 30,
      isAutoClick: false,
    };
    this.clickerId = null;
  }

  changeCounterState = () => {
    this.setState(({ count, isIncrease, step }) =>
      isIncrease ? { count: count + step } : { count: count - step }
    );
  };

  changeDirection = () => {
    const { isIncrease } = this.state;
    this.setState({ isIncrease: !isIncrease });
  };

  changeStep = (newStep) => {
    this.setState({ step: newStep });
  };

  autoClickerIteration = () => {
    const { autoClickStep } = this.state;
    this.setState(({ count }) => {
      return { count: count + autoClickStep };
    });
  };
  startAutoClick = () => {
    const { autoClickPeriod, isAutoClick } = this.state;
    this.clickerId = setTimeout(
      this.autoClickerIteration,
      autoClickPeriod * 1000
    );
    this.setState({ isAutoClick: !isAutoClick });
  };
  stopAutoClick = () => {
    clearTimeout(this.clickerId);
    this.setState({ isAutoClick: !this.state.isAutoClick });
    this.clickerId = null;
  };

  changeSettingsVisible = () => {
    const { isSettings } = this.state;
    this.setState({ isSettings: !isSettings });
  };
  componentDidUpdate() {
    const {
      // autoClickDuration: duration,
      autoClickPeriod,
      isAutoClick,
    } = this.state;
    console.log('isAutoClick', isAutoClick);
    if (isAutoClick) {
      clearTimeout(this.clickerId);
      this.clickerId = null;
      this.clickerId = setTimeout(
        this.autoClickerIteration,
        autoClickPeriod * 1000
      );

      console.log('Click');
    }
  }
  render() {
    const { count, isIncrease, step, isSettings, isAutoClick } = this.state;
    return (
      <div className={styles.wrapper}>
        <p>Counter: {count}</p>
        <p>Step: {step}</p>
        <Timer isAutoClick={isAutoClick} stopAutoClick={this.stopAutoClick} />
        <button className={styles.countBtn} onClick={this.changeCounterState}>
          {isIncrease ? '+' : '-'}
        </button>
        <button
          className={styles.settingsBtn}
          onClick={this.changeSettingsVisible}
        >
          <img src={icon} alt='settings icon' />
        </button>
        <button onClick={this.startAutoClick}>AutoClick</button>
        {isSettings && (
          <CounterSettings
            className={styles.settings}
            changeDirection={this.changeDirection}
            changeStep={this.changeStep}
            autoCounter={this.autoCounter}
          />
        )}
      </div>
    );
  }
}

export default Counter;
