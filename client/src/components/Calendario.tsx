import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/ReactCalendario.css';

export function Calendario() {
  const [value, onChange] = useState(new Date());

  const onClick = (value: Date, event: any) => {

    let fechaSesion1 : Date = new Date(2022, 3, 9);
    let fechaSesion2 : Date = new Date(2022, 3, 23);
    if(value.getDate() === fechaSesion1.getDate() || value.getDate() === fechaSesion2.getDate()){
      alert("Hay sesión ese día, prepárate para la grandeza de este acontecimiento");
    }
  } 

  return (
    <Calendar onChange={onChange} value={new Date(2022, 3, 9)} next2Label={null} prev2Label={null} onClickDay={onClick}/>
  );
}