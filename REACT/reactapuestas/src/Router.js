import React, { Component } from 'react'
import { BrowserRouter , Routes , Route , useParams } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Detalles from './components/Detalles'

export default class Router extends Component {
  render() {

    function DetallesElement () {

        var {idequipo} = useParams();

        return (<Detalles idequipo={idequipo}/>)
    }


    return (
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detalles/:idequipo' element={<DetallesElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
