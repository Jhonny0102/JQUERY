import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Lista from './components/Lista'
import CreateCoche from './components/CreateCoche'
import Detalles from './components/Detalles'
import UpdateCoche from './components/UpdateCoche'
import Eliminar from './components/Eliminar'

export default class Router extends Component {
  render() {

    function CapturarDetalles (){

        var {idcoche ,marca , modelo , conductor , imagen} = useParams();

        return (<Detalles idcoche={idcoche} marca={marca} modelo={modelo} conductor={conductor} />)
    }

    function CapturarUpdate () {

        var {idcoche} = useParams();

        return (<UpdateCoche idcoche={idcoche} />)
    }

    function CapturarDelete (){

        var {idcoche} = useParams();

        return (<Eliminar idcoche={idcoche}/>)
    }


    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/lista' element={<Lista/>}/>
            <Route path='/create' element={<CreateCoche/>}/>
            <Route path='/detalles/:idcoche/:marca/:modelo/:conductor' element={<CapturarDetalles/>}/>
            <Route path='/update/:idcoche' element={<CapturarUpdate/>} />
            <Route path='/delete/:idcoche' element={<CapturarDelete />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
