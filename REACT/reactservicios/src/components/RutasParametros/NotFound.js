import React, { Component } from 'react'
import imagenNot from '../../assets/images/imagen1.jpg';

export default class NotFound extends Component {
  render() {
    return (
      <div>
            <h1>Not Found</h1>
            <img src={imagenNot} style={{width:"300px" , height:"300px"}} />
      </div>
    )
  }
}
