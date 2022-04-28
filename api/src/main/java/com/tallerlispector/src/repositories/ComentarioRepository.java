package com.tallerlispector.src.repositories;

import com.tallerlispector.src.collections.Comentario;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;

public interface ComentarioRepository extends ReactiveCrudRepository<Comentario, String> {

    Flux<Comentario> findAllComentariosByUserId(String id);
    Flux<Comentario> findAllByPublicacionId(String publicacionId);

}
