import React from 'react';
import StepControler from '../StepController';
import AutoClick from '../AutoClick';
import styles from './CounterSettings.module.scss';

const CounterSettings = (props) => {
const{changeDirection, changeStep, autoCounter}=props;
  return (
    <div className={styles.container}>
      <button onClick={changeDirection}>Change direction</button>
      <StepControler changeStep={changeStep} />
      {/* <AutoClick autoCounter={autoCounter} /> */}
    </div>
  );
};

export default CounterSettings;
