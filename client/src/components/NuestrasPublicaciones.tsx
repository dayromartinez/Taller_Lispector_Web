import React from 'react'
import colombiaADosMiradas from '../images/Colombia_a_dos_miradas.png'
import ecosDeResistencia from '../images/Ecos_de_resistencia.jpeg'
import lecturasNoAplicadas1 from '../images/Lecturas_no_aplicadas_1.jpeg'
import lecturasNoAplicadas2 from '../images/Lecturas_no_aplicadas_2.jpeg'

export function NuestrasPublicaciones() {
  return (
    <div className='mb-8'>
        <h3 className='text-2xl font-bold pb-7'>Nuestras publicaciones</h3>
        <div className='grid grid-cols-4 gap-4 mx-10'>
            <img className='rounded' width={290} src={ecosDeResistencia} />
            <img className='rounded' width={390} src={colombiaADosMiradas} />
            <img className='rounded' width={250} src={lecturasNoAplicadas1} />
            <img className='rounded' width={250} src={lecturasNoAplicadas2} />
        </div>
    </div>
  )
}
