import { commentData } from './commentData';
import { publicacionData } from './publicacionData';

export interface propsComponentCommentary {
    comentarios: Array<commentData>, 
    publicacion?: publicacionData,
}