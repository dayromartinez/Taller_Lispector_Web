import React, { useEffect } from 'react'
import { Footer } from '../components/Footer';
import NavBarDesktop from '../components/NavBarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import { useState } from 'react';
import { validateToken } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';

export const PublicLayout = ({ children }) => {

    const [ sizeScreen, setSizeScreen ] = useState(0);
    const usuario = useSelector( ({usuario} : dataState) => usuario )
    const dispatch = useDispatch();

    const checkSizeScreen = () => {
        const size = window.innerWidth;
        
        setSizeScreen(size);
    }

    const validateUser = () => {
        (usuario?.['name'] !== null && localStorage.getItem('tokenUser') !== null) ? dispatch(validateToken()) : console.log('no se ha ejecutado el condicional del validtoken')

        console.log('token: ', localStorage.getItem('tokenUser'))
    }

    useEffect(() => {

        validateUser();

        checkSizeScreen();
        console.log('dentro del useEffect: ', window.innerWidth)
        
    }, []);

    return (
        <div>
            <header>
                <nav>
                    { sizeScreen >= 900 ? <NavBarDesktop /> : <NavbarMobile children={children} /> }
                </nav>
            </header>

            {   sizeScreen >= 900 
                ? (
                    <main>
                        { children }
                    </main>
                ) : null
            }

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
