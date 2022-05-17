import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import imagenClarice from './../images/Clarice1.jpg'
import '.././index.css'
import { NuestrasPublicaciones } from '../components/NuestrasPublicaciones'
import { NavBar2 } from '../components/NavBar2'
import { dataState } from '../redux/reducers'
import { Container } from "@mui/material";
import NavBarFinal from "../components/NavBarFinal";

export const InicioMUI = () => {
    const usuario = useSelector((state : dataState) => state.usuario);
    return (
        <Container>
            <NavBarFinal />
        </Container>
    )
}
