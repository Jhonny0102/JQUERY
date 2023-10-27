import React, { Component } from 'react'
import { BrowserRouter, Routes , Route , useParams } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Detalles from './components/Detalles'
import Jugadores from './components/Jugadores'
import Jugador from './components/Jugador'
import Apuesta from './components/Apuesta'
import RealizarApuesta from './components/RealizarApuesta'

export default class Router extends Component {
    render() {

        function DetalleElement (){

            var {idequipo} = useParams();

            return <Detalles idequipo={idequipo} />
        }

        function JugadoresElement () {

            var {idequipo} = useParams();

            return <Jugadores idequipo={idequipo} />
        }

        function JugadorElement () {

            var {idjugador} = useParams();

            return <Jugador idjugador={idjugador} />
        }


        return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/detalle/:idequipo' element={<DetalleElement/>}/>
                <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
                <Route path='/jugador/:idjugador' element={<JugadorElement/>}/>
                <Route path='/apuesta' element={<Apuesta/>}/>
                <Route path='/realizarapuesta' element={<RealizarApuesta/>}/>
            </Routes>   
        </BrowserRouter>
        )
    }
}