import React, { Component } from 'react'
import Mario from './../assets/images/mario.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
            <h1>Home Coches</h1>
            <img src={Mario} className="rounded mx-auto d-block" />
      </div>
    )
  }
}
