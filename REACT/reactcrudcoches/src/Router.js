import React, { Component } from 'react'
import { BrowserRouter, Routes , Route , useParams } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Lista from './components/Lista'
import Crear from './components/Crear'
import Detalles from './components/Detalles'
import Eliminar from './components/Eliminar'
import Actualizar from './components/Actualizar'


export default class Router extends Component {
  render() {

    function DetallesElement () {

      var { idcoche } = useParams();

      return (<Detalles idcoche={idcoche}/>)
    }

    function EliminarElement () {

      var {idcoche} = useParams();

      return (<Eliminar idcoche={idcoche} />)
    }

    function ActualizarElement () {

      var {idcoche} = useParams();

      return (<Actualizar idcoche={idcoche} />)
    }

    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/lista' element={<Lista/>} />
          <Route path='/crear' element={<Crear/>} />
          <Route path='/details/:idcoche' element={<DetallesElement/>} />
          <Route path='/delete/:idcoche' element={<EliminarElement/>} />
          <Route path='/update/:idcoche' element={<ActualizarElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}