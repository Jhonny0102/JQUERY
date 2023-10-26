import React, { Component } from 'react'
import logo from './../assets/images/logo.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={logo} className="rounded mx-auto d-block" />
      </div>
    )
  }
}
