import React, { Component } from 'react'
import { BrowserRouter, Routes,Route, useParams } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Series from './components/Series'
import Personajes from './components/Personajes'
import CrearPersonaje from './components/CrearPersonaje'
import ModificarPersonaje from './components/ModificarPersonaje'

export default class Router extends Component {
  render() {

    function SeriesElement () {

        var {idserie} = useParams();

        return <Series idserie={idserie} />
    }

    function PersonajesElement () {

        var {idserie} = useParams();

        return <Personajes idserie={idserie} />
    }



    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/series/:idserie' element={<SeriesElement/>}/>
            <Route path='/personajes/:idserie' element={<PersonajesElement/>}/>
            <Route path='/crear' element={<CrearPersonaje/>}/>
            <Route path='/modificar' element={<ModificarPersonaje/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
