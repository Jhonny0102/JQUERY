import React, { Component } from 'react'

export default class MenuRutaCollatz extends Component {
  render() {
    return (
      <div>
            <h1>Menu Ruta de Collatz</h1>
            <ul>
                <li>
                    <a href='/collatz/5'>Conjetura de Collatz del 5</a>
                </li>
            </ul>
      </div>
    )
  }
}
