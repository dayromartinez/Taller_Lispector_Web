import React from 'react'
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';

export const PrivateLayout = ({ children }) => {

  const user = useSelector(({usuarios} : dataState) => usuarios);

  console.log(user)

  return (
    <div>

      <main>
        { children }
      </main>
      
    </div>
  )
}
