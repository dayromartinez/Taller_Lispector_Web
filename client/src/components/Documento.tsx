import React, { useEffect, useRef } from 'react';
import nueveDeSeptiembre from '../utils/9_de_septiembre.pdf';
import escritoResistencia from '../utils/Escrito_resistencia.pdf';
import lecturasNoAplicadasI from '../utils/Lecturas_no_aplicadas_1.pdf';
import lecturasNoAplicadasII from '../utils/Lecturas_no_aplicadas_2.pdf';

export const Documento = ({nombrePublicacion}) => {

    const containerRef = useRef(null);


    let documentoPublicacion : string;

    const selectPublicacion = () => {

        switch(nombrePublicacion) {

            case 'Lecturas no aplicadas I':
                documentoPublicacion = lecturasNoAplicadasI;
                break;

            case 'Lecturas no aplicadas II':
                documentoPublicacion = lecturasNoAplicadasII;
                break;

            case 'Ecos de Resistencia':
                documentoPublicacion = escritoResistencia;
                break;
        }
    }

    useEffect(() => {

        let PSPDFKit;
        selectPublicacion();
        (async function () {
            PSPDFKit = await import('pspdfkit');
            const instance = await PSPDFKit.load({
                container: containerRef.current,
                document: documentoPublicacion,
                baseUrl: `${window.location.protocol}//${window.location.host}/`,
            });
        })();

        return () => PSPDFKit && PSPDFKit.unload(containerRef);
    }, []);

    return (
        <div style={{'display': 'flex', 'justifyContent': 'center'}}>
            <div
                ref={containerRef}
                className='pdf_estilos'
            />
        </div>
    );
}