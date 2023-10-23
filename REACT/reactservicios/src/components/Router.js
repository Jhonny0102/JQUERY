import React, { Component } from 'react'
import {BrowserRouter, Routes , Route } from 'react-router-dom';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';
import Home from './RutasParametros/Home';
import NotFound from './RutasParametros/NotFound';
import { useParams } from 'react-router-dom';
import ConjeturaCollatz from './RutaCollatz/ConjeturaCollatz';
import MenuRutasCollatz from './RutaCollatz/MenuRutasCollatz';

export default class Router extends Component {
  render() {

    //Dentro del render creamos la funcion CapturarCollatz que nos permitica como intermediario
        //capturar el parametro que pasaremos.
      function CapturarCollatz () {
          //Guardamos en la variable el parametro capturado. ¿¿Que pasa si pasamos mas de uno parametro ??
          var {miNumero} = useParams();
          //Devolvemos  como un prop la variable a la clase Collatz.
        return <ConjeturaCollatz numero={miNumero}/>
      }

    function TablaMultiplicarElement(){
        //Esta funcio permite capturar los parametros
        //de la ruta de forma dinamica.
        //Vamos a recibir un parametro llamado minumero, si hubiese mas parametros se añadiria de esta forma
        // var { minumero , parametro2 , parametro3}
        var { minumero } = useParams()
        //Devolvemos la etiqueta <TablaMultiplicar/> con su
        //props de numero
        return <TablaMultiplicar numero={minumero}/>

    }


    return (
      <BrowserRouter>
      {/* Aqui incluiremos los dibujos estaticos para el menu de rutas */}
      <h1 style={{color:"green"}}> Menu en Router</h1>
      <MenuRutasCollatz/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/ConjeturaCollatz/:miNumero' element={<CapturarCollatz/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
