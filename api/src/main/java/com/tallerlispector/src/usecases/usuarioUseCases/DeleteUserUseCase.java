package com.tallerlispector.src.usecases.usuarioUseCases;

import com.tallerlispector.src.repositories.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeleteUserUseCase implements Function<String, Mono<Void>> {

    private final UsuarioRepository usuarioRepository;

    public DeleteUserUseCase(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "El id es requerido");
        return usuarioRepository.deleteById(id);
    }
}
