package com.tallerlispector.src.usecases.comentaryUseCases.interfaces;

import com.tallerlispector.src.dtos.ComentarioDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SaveComentario {

    Mono<ComentarioDTO> saveComentario(@Valid ComentarioDTO comentarioDTO);

}
