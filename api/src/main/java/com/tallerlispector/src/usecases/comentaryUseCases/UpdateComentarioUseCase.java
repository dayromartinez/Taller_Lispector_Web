package com.tallerlispector.src.usecases.comentaryUseCases;

import com.tallerlispector.src.collections.Comentario;
import com.tallerlispector.src.dtos.ComentarioDTO;
import com.tallerlispector.src.repositories.ComentarioRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import com.tallerlispector.src.usecases.comentaryUseCases.interfaces.UpdateComentario;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class UpdateComentarioUseCase implements UpdateComentario {

    private ComentarioRepository comentarioRepository;
    private MapperUtils mapperUtils;

    public UpdateComentarioUseCase(ComentarioRepository comentarioRepository, MapperUtils mapperUtils) {
        this.comentarioRepository = comentarioRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<String> apply(ComentarioDTO comentarioDTO) {
        Objects.requireNonNull(comentarioDTO.getId(), "El id no puede ser nulo");
        return comentarioRepository
                .save(mapperUtils.mapperToComentario(comentarioDTO.getId()).apply(comentarioDTO))
                .map(Comentario::getId);
    }
}
