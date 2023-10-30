import React, { Component } from 'react'
import Logo from './../assets/images/logo.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
            <h1>Home</h1>
            <img src={Logo}/>
      </div>
    )
  }
}
