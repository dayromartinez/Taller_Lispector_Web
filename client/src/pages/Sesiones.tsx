import React from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer'
import { Calendario } from '../components/Calendario';
import { NavBar2 } from '../components/NavBar2';
import NavBarFinal from '../components/NavBarFinal';


export const SesionesPage = () => {
  return (
    <div>
        <NavBarFinal />
        <div className='flex justify-between m-10'>
          <Calendario />
          <div className='mx-10'>
            (Acá va el carrusel de imgs)
          </div>
        </div>
        <div className='bg-slate-500'>
          <h1 className='text-3xl font-bold pt-6'>Ciclo 1</h1>
          <p className='p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum harum architecto aspernatur quisquam, minus eligendi, consequuntur earum aliquid exercitationem rem optio officiis temporibus nesciunt et molestiae, saepe dolores incidunt? Fet consectetur adipisicing elit. Mollitia rerum harum architecto aspernatur quisquam, minus eligendi, consequuntur earum aliquid exercitationem rem optio officiis temporibus nesciunt et molestiae, saepe dolores incidunt.</p>
        </div>
        <h1 className='text-3xl font-bold mt-8'>Sesiones</h1>
        <div className='grid grid-cols-3 gap-4 mx-10 my-4'>
          <div className='bg-gray-200 p-10 my-5'>Sesión 1 - Imagen</div>
          <div className='bg-gray-200 p-10 my-5'>Sesión 2 - Imagen</div>
          <div className='bg-gray-200 p-10 my-5'>Sesión 3 - Imagen</div>
        </div>
        <div className='bg-slate-500'>
          <h1 className='text-3xl font-bold  pt-6'>Ciclo 2</h1>
          <p className='p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum harum architecto aspernatur quisquam, minus eligendi, consequuntur earum aliquid exercitationem rem optio officiis temporibus nesciunt et molestiae, saepe dolores incidunt? Fet consectetur adipisicing elit. Mollitia rerum harum architecto aspernatur quisquam, minus eligendi, consequuntur earum aliquid exercitationem rem optio officiis temporibus nesciunt et molestiae, saepe dolores incidunt.</p>
        </div>
        <br/>
        <Footer />
    </div>
  )
}
