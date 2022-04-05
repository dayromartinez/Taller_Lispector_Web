package com.tallerlispector.src.usecases.usuarioUseCase;

import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.repositories.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.function.Function;

@Service
@Validated
public class GetUserUseCase implements Function<String, Mono<UsuarioDTO>> {

    private final UsuarioRepository usuarioRepository;
    private final MapperUtils mapperUtils;

    public GetUserUseCase(UsuarioRepository usuarioRepository, MapperUtils mapperUtils) {
        this.usuarioRepository = usuarioRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Mono<UsuarioDTO> apply(String id) {
        return usuarioRepository.findById(id)
                .map(mapperUtils.mapEntityToUsuario())
                .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }
}
