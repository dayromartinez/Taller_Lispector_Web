import React from 'react'
import ecosDeResistencia from './../images/Ecos_de_resistencia.jpeg'
import { NuestrasPublicaciones } from '../components/NuestrasPublicaciones';
import { PublicLayout } from '../layouts/PublicLayout';

export const PublicacionesPage = () => {

  let microrelatos: number[] = [1, 2, 3, 4, 5, 6]; 
  return (
    <PublicLayout>
        <h1 className='text-6xl mt-8 mb-8'>Publicaciones</h1>
        <div className='display: flex bg-slate-500 mb-10'>
          <img src={ecosDeResistencia} className='ml-16 mb-10 mt-11'/>
          <div>
            <h2 className='text-4xl mt-8'>Ecos de Resistencia</h2>
            <p className='text-2xl mt-10 text-justify ml-10 mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum sit iusto quo, adipisci explicabo excepturi magni autem accusamus cumque dolores doloribus ducimus? Quas ut optio aliquam explicabo tempora voluptatum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, non ad eum laudantium explicabo quam a cupiditate! Amet excepturi repellat, reprehenderit quibusdam repellendus tempora est laborum accusantium eaque. Minima, eaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium aut dignissimos dolore quaerat. Quod asperiores repellendus ipsum quasi, cumque in, ad deleniti soluta assumenda obcaecati quae veniam possimus repellat.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias iusto iste expedita. Dignissimos enim unde esse expedita atque inventore tenetur architecto! Non odit incidunt labore adipisci accusamus iusto nihil.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus incidunt harum consequatur similique, natus quod tenetur vero officia veritatis ullam, expedita ratione nihil, explicabo quidem velit repudiandae accusamus facere modi!</p>
          </div>
        </div>
        <NuestrasPublicaciones/>
        <div className='grid grid-cols-2 gap-4 m-10'>{
          microrelatos.map((microrelato) => {
            return (
              <div className='bg-slate-500 p-5 rounded-2xl'>
                Minirelato o Poema <br/> {microrelato}
              </div>
            )
          })  
        }</div>
    </PublicLayout>
  )
}
