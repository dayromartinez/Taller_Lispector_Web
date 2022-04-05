package com.tallerlispector.src.usecases.usuarioUseCase;

import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.repositories.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;

import java.util.function.Supplier;

@Service
@Validated
public class GetAllUsersUseCase implements Supplier<Flux<UsuarioDTO>> {

    private final UsuarioRepository usuarioRepository;
    private final MapperUtils mapperUtils;

    public GetAllUsersUseCase(UsuarioRepository usuarioRepository, MapperUtils mapperUtils) {
        this.usuarioRepository = usuarioRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Flux<UsuarioDTO> get() {
        return usuarioRepository.findAll()
                .map(mapperUtils.mapEntityToUsuario())
                .switchIfEmpty(Flux.error(new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }
}
