import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/ReactCalendario.css';
import clarice from '../images/Clarice1.jpg';

export function Calendario() {
  const [value, onChange] = useState(new Date());

  const onClick = (value: Date, event: any) => {

    let fechaSesion1 : Date = new Date(2022, 7, 6);
    let fechaSesion2 : Date = new Date(2022, 7, 20);
    if(value.getDate() === fechaSesion1.getDate() || value.getDate() === fechaSesion2.getDate()){
      alert("¡Prepárese sumercé que lo que se viene para el cierre del ciclo de Ciencia Ficción es pura candela!");
      /*<div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={clarice} alt="Flayer sesión" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sesión II ciclo Literatura y Música</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lugar: Cra 16b #185-24 Barrio Verbenal</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fecha: 9 de abril</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Hora: 4 a 6 p.m</span>
        </div>
      </div>*/
    }
  } 

  return (
    <Calendar onChange={onChange} value={new Date(2022, 7, 6)} next2Label={null} prev2Label={null} onClickDay={onClick}/>
  );
}