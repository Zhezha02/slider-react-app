import React, { Component } from 'react';

class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      period: 1,
      // duration:1,
    };
  }
  rangeHandle=({target:{value, name}})=> {
    this.setState({[name]: value})
  }

  render() {
    const{step, period} = this.state;
    return (
      <form>
        <label>
          Step:{step}
          <input type='range' name='step' max='1000' value={step} onChange={this.rangeHandle}/>
        </label>
        <label>
          Period:{period}s
          <input type='range' name='period' max='1000' value={period} onChange={this.rangeHandle} />
        </label>
      </form>
    );
  }
}

export default AutoClick;
