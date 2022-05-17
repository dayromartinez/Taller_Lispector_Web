import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { InicioPage } from './pages/Inicio';
import { Route, Routes } from 'react-router-dom'
import { SesionesPage } from './pages/Sesiones'
import { PublicacionesPage } from './pages/Publicaciones'
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { InicioMUI } from './pages/InicioMUI';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InicioPage />}/>
        <Route path='/sesiones' element={<SesionesPage />}/>
        <Route path='/publicaciones' element={<PublicacionesPage />}/>
        <Route path='/inicio_sesion' element={<Login />}/>
        <Route path='/registrarse' element={<Registro />}/>
        <Route path='/inicio' element={<InicioMUI />}/>
      </Routes>
    </div>
  )
}

export default App
