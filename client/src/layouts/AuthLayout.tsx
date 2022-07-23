import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';
import { AdminLayout } from './AdminLayout';
import { PublicLayout } from './PublicLayout';

export const AuthLayout = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const user = useSelector(( state : dataState ) => state.usuario);

  const onExistAdmin = () => {

    if(user?.['role'] === 'admin') return setIsAdmin(true);

  }

  useEffect(() => {

    onExistAdmin();

  }, [user])

  console.log('USUARIO: ', user)

  return (
    <>
      {
        isAdmin ? (<AdminLayout children={children} />) : (<PublicLayout children={children} />)
      }
    </>
  )
}
