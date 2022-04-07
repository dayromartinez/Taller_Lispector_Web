package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.repositories.PublicacionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeletePublicacionUseCase implements Function<String, Mono<Void>>{

    private PublicacionRepository publicacionRepository;

    public DeletePublicacionUseCase(PublicacionRepository publicacionRepository) {
        this.publicacionRepository = publicacionRepository;
    }

    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "El ID no puede estar vacío");
        return publicacionRepository.deleteById(id);
    }
}
