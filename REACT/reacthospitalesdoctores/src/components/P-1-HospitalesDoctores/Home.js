import React, { Component } from 'react'
import Casa from './../../assets/images/home.avif';

export default class Home extends Component {
  render() {
    return (
      <div>
            <h1>Home</h1>
            <img src={Casa} style={{width:"150px" , height:"150px"}} />
      </div>
    )
  }
}
