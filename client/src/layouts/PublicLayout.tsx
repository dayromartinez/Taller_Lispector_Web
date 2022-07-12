import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';
import NavBarFinal from '../components/NavBarFinal';

export const PublicLayout = ({ children }) => {

    return (
        <>
            <header>
                <nav>
                    <NavBarFinal />
                </nav>
            </header>

            <main
                className='w-800 mx-auto py-4'
            >
                
                { children }

            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
