import React, { Component } from 'react'
import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>   
        </BrowserRouter>
    )
  }
}
