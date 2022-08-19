import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';

export const ProtectedRoutePostales = ({ children }) => {

    // const [match, setMatch] = useState(false)
    const user = useSelector(( state : dataState ) => state.usuario);

    if( user?.['uid'] !== undefined ){
        // user?.['publicationsCode']?.forEach(({publicacion}) => {
        //     if( publicacion.includes('El tiempo en que no nos vimos' )){
        //         setMatch(true);
        //     }
        // });

        // user?.['publicationsCode']?.[0]?.['publicacion'] === 'El tiempo en que no nos vimos' ? setMatch(true) : setMatch(false)
    }

    if( user?.['publicationsCode']?.[0]?.['publicacion'] !== 'El tiempo en que no nos vimos' ){
        return <Navigate to='/' />
    }

    return children;
}
