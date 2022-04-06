package com.tallerlispector.src.usecases;

import com.tallerlispector.src.collections.Publicacion;
import com.tallerlispector.src.collections.Usuario;
import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.dtos.UsuarioDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperUtils {

    public Function<UsuarioDTO, Usuario> mapperToUsuario(String id){
        return updateUsuario -> {
          var usuario = new Usuario();
          usuario.setId(id);
          usuario.setNombre(updateUsuario.getNombre());
          usuario.setRol(updateUsuario.getRol());
          usuario.setContrasena(updateUsuario.getContrasena());
          usuario.setCorreo(updateUsuario.getCorreo());
          usuario.setCelular(updateUsuario.getCelular());
          usuario.setCodigoPublicacionPostales(updateUsuario.getCodigoPublicacionPostales());
          return usuario;
        };
    }

    public Function<Usuario, UsuarioDTO> mapEntityToUsuario(){
        return entity -> new UsuarioDTO(entity.getId(), entity.getNombre(), entity.getCorreo(), entity.getCelular(), entity.getContrasena(), entity.getRol());
    }

    public Function<PublicacionDTO, Publicacion> mapperToPublicacion(String id){
        return updatePublicacion -> {
            var publicacion = new Publicacion();
            publicacion.setId(id);
            publicacion.setComentarios(updatePublicacion.getComentarios());
            publicacion.setNombre(updatePublicacion.getNombre());
            publicacion.setAutores(updatePublicacion.getAutores());
            publicacion.setDescripcion(updatePublicacion.getDescripcion());
            publicacion.setAnoLanzamiento(updatePublicacion.getAnoLanzamiento());
            publicacion.setGeneros(updatePublicacion.getGeneros());
            publicacion.setNumeroPaginas(updatePublicacion.getNumeroPaginas());
            publicacion.setUrlDocumento(updatePublicacion.getUrlDocumento());
            return publicacion;
        };
    }

    public Function<Publicacion, PublicacionDTO> mapEntityToPublicacion(){
        return entity -> new PublicacionDTO(entity.getId(), entity.getNombre(), entity.getDescripcion(), entity.getNumeroPaginas(), entity.getAnoLanzamiento(), entity.getAutores(), entity.getUrlDocumento(), entity.getGeneros(), entity.getComentarios());
    }

}
