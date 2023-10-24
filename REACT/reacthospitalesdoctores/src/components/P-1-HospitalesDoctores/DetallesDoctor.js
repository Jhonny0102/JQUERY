import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class DetallesDoctor extends Component {

  state = {

    doctor: null,

    status : false
  }

  loadDoctor = () => {

    //alert(this.props.iddoctor);

    var request ="api/doctores/" + this.props.iddoctor;

    var url = Global.urlApiDoctores+request;

    //console.log(url);

    axios.get(url).then( response => {

      this.setState({

        doctor: response.data ,

        status : true
      })
      //console.log(this.state.doctor);
    })
  }

  componentDidMount = () => {

    this.loadDoctor();
  }

  componentDidUpdate = (oldProps) => {

    if(oldProps.iddoctor != this.props.iddoctor){

      this.loadDoctor();
    }
  }


  render() {
    return (
      <div>
            {
              this.state.status == true && 
              (
                <div>
                    <h4>ID Doctor: {this.state.doctor.idDoctor}</h4>
                    <h4>Apellido: {this.state.doctor.apellido}</h4>
                    <h4>Salario: {this.state.doctor.salario}</h4>
                </div>
              )
            }
      </div>
    )
  }
}
