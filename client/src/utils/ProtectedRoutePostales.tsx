import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';

export const ProtectedRoutePostales = ({ children }) => {

    // const [match, setMatch] = useState(false)
    const user = useSelector(( state : dataState ) => state.usuario);
    const token = localStorage.getItem('tokenUser');

    if( token !== null ){        
        if( user?.['uid'] !== undefined ){
            if( user?.['publicationsCode']?.[0]?.['publicacion'] !== 'El tiempo en que no nos vimos' && user?.['role'] !== 'admin' ){
                return <Navigate to='/' />
            }
        }
    } else {
        return <Navigate to='/' />
    }


    return children;
}
