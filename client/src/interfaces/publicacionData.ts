export type publicacionData = {
    _id?: string;
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
    contenido?: Array<Object>,
}