import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Swal from 'react-sweetalert2';
import { useEffect } from 'react';

export default class Eliminar extends Component {

  state = {

    status : false
  }

  eliminarCoche = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    // var request = "/api/Coches/DeleteCoche/" + this.props.idcoche;

    // var url = Global.apiCoches + request;

    // axios.delete(url).then(response => {

    //   this.setState({

    //     status : true
    //   })
    // })
  }


  render() {
    return (
      <div>
          {
            this.state.status == true && 
            (<Navigate to={"/lista"}/>)
          }
            <h1>Eliminar Coche : {this.props.idcoche}</h1>
            <button className="btn btn-danger" onClick={this.eliminarCoche}>Eliminar</button>
      </div>
    )
  }
}
