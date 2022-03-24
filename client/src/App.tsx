import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { InicioPage } from './pages/inicio/Inicio'
import { Route, Routes } from 'react-router-dom'
import { SesionesPage } from './pages/sesiones/Sesiones'
import { PublicacionesPage } from './pages/publicaciones/Publicaciones'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InicioPage />}/>
        <Route path='/sesiones' element={<SesionesPage />}/>
        <Route path='/publicaciones' element={<PublicacionesPage />}/>
      </Routes>
    </div>
  )
}

export default App
