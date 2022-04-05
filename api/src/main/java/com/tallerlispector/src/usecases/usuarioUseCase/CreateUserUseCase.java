package com.tallerlispector.src.usecases.usuarioUseCase;

import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.repositories.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

@Service
@Validated
public class CreateUserUseCase implements SaveUser {

    private final UsuarioRepository usuarioRepository;
    private final MapperUtils mapperUtils;

    public CreateUserUseCase(UsuarioRepository usuarioRepository, MapperUtils mapperUtils) {
        this.usuarioRepository = usuarioRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<Object> apply(UsuarioDTO usuarioDTO) {
        return usuarioRepository.findById(usuarioDTO.getId())
                .flatMap(usuario -> {
                    return Mono.error(new ResponseStatusException(HttpStatus.CONFLICT));
                })
                .switchIfEmpty(usuarioRepository.save(mapperUtils.mapperToUsuario(null)
                        .apply(usuarioDTO)).thenReturn("Usuario registrado"));
    }
}
