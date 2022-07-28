import React from 'react'
import { esES } from '@material-ui/core/locale'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#5E44FF',
                contrastText: '#ffffff',
            },
            secondary: {
                light: '#93B3DF',
                main: '#5E44FF',
            },
            error: {
                main: '#f35b69',
            },
            warning: {
                main: '#ff9800',
            },
            info: {
                main: '#93b3df',
            },
            success: {
                main: '#3AD399',
            },
        },
        typography: {
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightBold: 500,
        },
    },
    esES
    )

interface Props {
    children: JSX.Element[]
}

export default function ThemeAppProvider({ children }): JSX.Element {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}