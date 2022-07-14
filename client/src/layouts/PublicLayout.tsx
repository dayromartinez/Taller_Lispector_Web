import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';
import NavBarFinal from '../components/NavBarFinal';
import NavbarMobile from '../components/NavbarMobile';
import { useState } from 'react';

export const PublicLayout = ({ children }) => {

    const [ sizeScreen, setSizeScreen ] = useState(0);

    const checkSizeScreen = () => {
        const size = window.innerWidth;
        
        setSizeScreen(size);
    }

    useEffect(() => {
        checkSizeScreen();
        console.log('dentro del useEffect: ', window.innerWidth)
    }, [window.innerWidth]);

    return (
        <>
            <header>
                <nav>
                    { sizeScreen >= 900 ? <NavBarFinal /> : <NavbarMobile children={children} /> }
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
        </>
    )
}
