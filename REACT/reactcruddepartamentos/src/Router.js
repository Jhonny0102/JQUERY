import React, { Component } from 'react'
import { Routes , Route , BrowserRouter , useParams } from 'react-router-dom';
import MenuDepartamento from './components/MenuDepartamento';
import HomeDepatamento from './components/HomeDepatamento';
import CreateDepartamento from './components/CreateDepartamento';
import DetalleDepartamento from './components/DetalleDepartamento';
export default class Router extends Component {
  render() {

    function DetalleDepartamentoElement (){

        var {iddepartamento , nombre , localidad} = useParams();

        return <DetalleDepartamento iddepartamento={iddepartamento} nombre={nombre} localidad={localidad} />
    }

    return (
      <BrowserRouter>
      <MenuDepartamento/>
        <Routes>
            <Route path='/' element={<HomeDepatamento/>} />
            <Route path='/create' element={<CreateDepartamento/>} />
            <Route path='/details/:iddepartamento/:nombre/:localidad' element={<DetalleDepartamentoElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
