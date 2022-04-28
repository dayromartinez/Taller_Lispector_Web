package com.tallerlispector.src.usecases.publicacionUseCases.interfaces;

import com.tallerlispector.src.dtos.PublicacionDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface UpdatePublicacion {
    Mono<String> apply(@Valid PublicacionDTO publicacionDTO);
}
