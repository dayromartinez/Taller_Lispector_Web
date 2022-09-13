import './App.css'
import { InicioPage } from './pages/Inicio';
import { Route, Routes } from 'react-router-dom'
import { SesionesPage } from './pages/Sesiones'
import { PublicacionesPage } from './pages/Publicaciones'
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { PostalesPage } from './pages/Postales';
import { ProtectedRoutes } from './utils/ProtectedRoutes';
import { Publicacion } from './pages/Publicacion';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InicioPage />}/>
        <Route path='/sesiones' element={<SesionesPage />}/>
        <Route path='/publicaciones' element={<PublicacionesPage />}/>
        <Route path='/inicio_sesion' element={<Login />}/>
        <Route path='/registrarse' element={<Registro />}/>
        <Route path='/postales' element={
          <ProtectedRoutes publicacion={"El tiempo en que no nos vimos"}>
            <PostalesPage />
          </ProtectedRoutes>}
        />
        <Route path='/ecos_de_resistencia' element={
          <Publicacion nombrePublicacion={"Ecos de Resistencia"} />
        }
        />
        <Route path='/lecturas_no_aplicadas_II' element={
          <Publicacion nombrePublicacion={"Lecturas no aplicadas II"} />
        }
        />
        <Route path='/lecturas_no_aplicadas_I' element={
          <Publicacion nombrePublicacion={"Lecturas no aplicadas I"} />
        }
        />
      </Routes>
    </div>
  )
}

export default App
