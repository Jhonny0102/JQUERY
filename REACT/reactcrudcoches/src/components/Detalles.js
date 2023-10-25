import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Detalles extends Component {
  render() {
    return (
      <div>
            <h1>Detalles Coche: {this.props.idcoche}</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID Coche</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.idcoche}</td>
                        <td>{this.props.marca}</td>
                        <td>{this.props.modelo}</td>
                        <td>{this.props.conductor}</td>

                    </tr>
                </tbody>
            </table>
            <NavLink to={"/lista"}>Volver Lista</NavLink>
      </div>
    )
  }
}
