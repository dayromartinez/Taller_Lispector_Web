package com.tallerlispector.src.repositories;

import com.tallerlispector.src.collections.Usuario;
import com.tallerlispector.src.utils.Rol;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface UsuarioRepository extends ReactiveCrudRepository<Usuario, String> {
    Flux<Usuario> findUsuarioByCedulaIsContaining(String cedula);
    Flux<Usuario> findUsuarioByNombre(String nombre);
    Flux<Usuario> findUsuarioByCorreo(String correo);
    Flux<Usuario> findUsuarioByRol(Rol rol);
}
