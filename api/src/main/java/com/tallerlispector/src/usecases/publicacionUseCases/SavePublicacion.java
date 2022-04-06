package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.dtos.PublicacionDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SavePublicacion {
    Mono<Object> apply(@Valid PublicacionDTO publicacionDTO);
}
