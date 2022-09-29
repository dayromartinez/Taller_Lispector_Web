import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';
import { AdminLayout } from './AdminLayout';
import { PublicLayout } from './PublicLayout';
import { getAllPublications } from '../redux/actions/publicationActions';
import { getAllSesions } from '../redux/actions/sesionActions';
import { getAllCicles } from '../redux/actions/ciclesActions';
import { validateToken } from '../redux/actions/userActions';

export const AuthLayout = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const user = useSelector(( state : dataState ) => state.usuario);
  const dispatch = useDispatch();

  const onExistAdmin = () => {

    if(user?.['role'] === 'admin') return setIsAdmin(true);

  }

  useEffect(() => {

    onExistAdmin();
    dispatch(getAllPublications());
    dispatch(getAllSesions());
    dispatch(getAllCicles());

  }, [user])

  useEffect(() => {
    if(localStorage.getItem('tokenUser')){
      dispatch(validateToken());
    }else{
      localStorage.removeItem('tokenUser')
    }
  }, [])

  return (
    <>
      {
        isAdmin ? (<AdminLayout children={children} />) : (<PublicLayout children={children} />)
      }
    </>
  )
}
