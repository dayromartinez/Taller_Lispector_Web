import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';

export const ProtectedRoutes = ({ children, publicacion }) => {

    // const [match, setMatch] = useState(false)
    const user = useSelector(( state : dataState ) => state.usuario);
    const token = localStorage.getItem('tokenUser');

    if( token !== null ){        
        if( user?.['uid'] !== undefined ){
            if( !user?.['publicationsCode']?.includes(publicacion) && user?.['role'] !== 'admin' ){
                return <Navigate to='/' />
            }
        }
    } else {
        return <Navigate to='/' />
    }


    return children;
}
