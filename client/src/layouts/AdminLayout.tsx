import React, { useEffect } from 'react'
import { Footer } from '../components/Footer';
import { useState } from 'react';
import NavbarDesktopAdmin from '../components/NavbarDesktopAdmin';
import NavbarMobileAdmin from '../components/NavbarMobileAdmin';

export const AdminLayout = ({ children }) => {

    const [ sizeScreen, setSizeScreen ] = useState(0);

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
