package com.tallerlispector.src.usecases;

import com.tallerlispector.src.collections.Usuario;
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
}
