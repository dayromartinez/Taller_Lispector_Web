import React, { useEffect } from 'react'
import { Footer } from '../components/Footer';
import NavBarDesktop from '../components/NavBarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import { useState } from 'react';
import { validateToken } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { dataState } from '../redux/reducers/index';
import NavbarDesktopAdmin from '../components/NavbarDesktopAdmin';
import NavbarMobileAdmin from '../components/NavbarMobileAdmin';

export const AdminLayout = ({ children }) => {

    const [ sizeScreen, setSizeScreen ] = useState(0);
    const usuario = useSelector( ({usuario} : dataState) => usuario )
    const dispatch = useDispatch();

    const checkSizeScreen = () => {
        const size = window.innerWidth;
        
        setSizeScreen(size);
    }

    
    useEffect(() => {
        checkSizeScreen();
    }, []);

    return (
        <div>
            <header>
                <nav>
                    { sizeScreen >= 900 ? <NavbarDesktopAdmin /> : <NavbarMobileAdmin children={children} /> }
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
