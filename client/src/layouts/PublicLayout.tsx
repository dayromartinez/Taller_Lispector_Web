import React, { useEffect } from 'react'
import { Footer } from '../components/Footer';
import NavBarDesktop from '../components/NavBarDesktop';
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
