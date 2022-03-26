package com.tallerlispector.src.repositories;

import com.tallerlispector.src.collections.Publicacion;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface PublicacionRepository extends ReactiveCrudRepository<Publicacion, String> {
    Flux<Publicacion> findPublicacionByNombre(String nombre);
}
