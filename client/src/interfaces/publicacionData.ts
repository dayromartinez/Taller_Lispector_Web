export type publicacionData = {
    nombre?: string, 
    descripcion?: string,
    numeroPaginas?: string, 
    anoLanzamiento?: string,
    autores?: Array<string>,
    urlDocumento?: string,
    urlImagen?: string,
    generos?: Array<string>,
    comentarios?: Array<Object>,
    codigosPublicacion?: Array<Object>,
}