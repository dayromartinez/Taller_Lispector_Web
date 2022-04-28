package com.tallerlispector.src.usecases.comentaryUseCases;

import com.tallerlispector.src.repositories.ComentarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeleteComentarioUseCase implements Function<String, Mono<Void>> {

    private ComentarioRepository comentarioRepository;

    public DeleteComentarioUseCase(ComentarioRepository comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }

    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "El id no puede ser nulo");
        return comentarioRepository.deleteById(id);
    }
}
