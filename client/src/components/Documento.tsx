import React, { useEffect, useRef } from 'react';
import nueveDeSeptiembre from '../utils/9_de_septiembre.pdf'
import escritoResistencia from '../utils/Escrito_resistencia.pdf';

export const Documento = () => {

    const canvasRef = useRef(null);
	useEffect(() => {
		(async function () {
			// We import this here so that it's only loaded during client-side rendering.
			const pdfJS = await import('pdfjs-dist/build/pdf');
			pdfJS.GlobalWorkerOptions.workerSrc =
				window.location.origin + '/pdf.worker.min.js';
			const pdf = await pdfJS.getDocument('https://drive.google.com/uc?export=view&id=1G8Lnn94dxVxd5-Uycroup3kb-_4Z_c3q').promise;

			const page = await pdf.getPage(1);
			const viewport = page.getViewport({ scale: 1.5 });

			// Prepare canvas using PDF page dimensions.
			const canvas = canvasRef.current;
			const canvasContext = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			// Render PDF page into canvas context.
			const renderContext = { canvasContext, viewport };
			page.render(renderContext);
		})();
	}, []);

	return <canvas ref={canvasRef} style={{ height: '100vh' }} />;
}