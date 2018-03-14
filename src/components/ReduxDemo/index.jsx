import React, { Component } from 'react';

export default class ReduxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Redux & React'
    }
  }
  render() {
    const st = this.state;
    return (
      <div>
        <h1>This is {st.title}!</h1>
      </div>
    )
  }
}