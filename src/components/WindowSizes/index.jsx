import React, { Component } from 'react';

class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  changeWindowSizes=()=>{
    this.setState({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }

  render () {
    const { width, height } = this.state;
window.addEventListener('resize', this.changeWindowSizes)
    return (
      <div>
        <p>Current width oj viewport if:{width}</p>
        <p>Current height oj viewport if:{height}</p>
      </div>
    );
  }
}

export default WindowSizes;
