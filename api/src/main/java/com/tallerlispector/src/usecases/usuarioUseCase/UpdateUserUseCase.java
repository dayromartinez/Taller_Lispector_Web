package com.tallerlispector.src.usecases.usuarioUseCase;

import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.repositories.UsuarioRepository;
import com.tallerlispector.src.usecases.usuarioUseCase.MapperUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class UpdateUserUseCase implements Function<UsuarioDTO, Mono<UsuarioDTO>> {

    private final UsuarioRepository usuarioRepository;
    private final MapperUtils mapperUtils;

    public UpdateUserUseCase(UsuarioRepository usuarioRepository, MapperUtils mapperUtils) {
        this.usuarioRepository = usuarioRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Mono<UsuarioDTO> apply(UsuarioDTO usuarioDTO) {
        Objects.requireNonNull(usuarioDTO.getId(), "El id es requerido. Respete");
        return usuarioRepository.findById(usuarioDTO.getId())
                .flatMap(usuario -> {
                    usuario.setNombre(usuarioDTO.getNombre());
                    usuario.setCelular(usuarioDTO.getCelular());
                    usuario.setContrasena(usuarioDTO.getContrasena());
                    usuario.setRol(usuarioDTO.getRol());
                    return usuarioRepository.save(usuario);
                })
                .map(mapperUtils.mapEntityToUsuario())
                .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }
}
