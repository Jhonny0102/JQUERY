import React, { Component } from 'react'
import fondo from './../assets/images/fondo.png';

export default class Home extends Component {
  render() {
    return (
      <div>
            <h1>Home</h1>
            <img src={fondo} className="img-fluid"/>
      </div>
    )
  }
}
