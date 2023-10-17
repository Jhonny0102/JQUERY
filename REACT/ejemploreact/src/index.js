import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './components/reportWebVitals';
import Suma from "./components/SumarNumeros/SumarNumeros"
import ParentMates from './components/PadreMatematicas';
import Contar from './components/Contador';
import Car from './components/car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Renault" modelo="Talisman" aceleracion="60" velocidadmaxima="250"/>
    <Car marca="Opel" modelo="Insignia" aceleracion="80" velocidadmaxima="300"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
