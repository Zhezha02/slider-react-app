import React, { Component } from 'react';
// import styles from './StepController.module.css';

class StepController extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };
  }
  handleForm = e => {
    const {
      target: {
        step: { value },
      },
    } = e;
    const { changeStep } = this.props;
    e.preventDefault();
    changeStep(Number(value));
  };
  handleInput = ({ target: { value } }) => {
    if (/^\d+$/gm.test(value)) {
      this.setState({ value: value });
    }
  };

  render () {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleForm}>
        <label>
          New step:
          <input
            type='text'
            name='step'
            value={value}
            onChange={this.handleInput}
          />
        </label>
        <input type='submit' value='Change' />
      </form>
    );
  }
}

export default StepController;
