package com.tallerlispector.src.usecases.usuarioUseCases;

import com.tallerlispector.src.dtos.UsuarioDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SaveUser {
    Mono<Object> apply(@Valid UsuarioDTO usuarioDTO);
}
