import React, { Component } from 'react'
import {BrowserRouter, Routes , Route } from 'react-router-dom';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';
import Home from './RutasParametros/Home';
import NotFound from './RutasParametros/NotFound';
import { useParams } from 'react-router-dom';

export default class Router extends Component {
  render() {

    function TablaMultiplicarElement(){
        //Esta funcio permite capturar los parametros
        //de la ruta de forma dinamica.
        //Vamos a recibir un parametro llamado minumero
        var { minumero } = useParams();
        //Devolvemos la etiqueta <TablaMultiplicar/> con su
        //props de numero
        return <TablaMultiplicar numero={minumero}/>

    }


    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
