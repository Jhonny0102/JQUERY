import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/' >Home</a>
            </li>
            <li>
                <a href='/tabla/7' >Tabla Multilicar 7</a>
            </li>
            <li>
                <a href='/tabla/5' >Tabla Multilicar 5</a>
            </li>
            <li>
                <a href='/noexisto' >Sin ruta mapeada</a>
            </li>
        </ul>
      </div>
    )
  }
}
