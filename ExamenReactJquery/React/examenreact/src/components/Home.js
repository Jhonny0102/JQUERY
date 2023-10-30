import React, { Component } from 'react'
import Logo from './../assets/images/logo.jpg'

export default class Home extends Component {
  render() {
    return (

      // Zona muestra de logo
      <div>
            <img src={Logo} className="img-fluid"/>
      </div>
    )
  }
}
