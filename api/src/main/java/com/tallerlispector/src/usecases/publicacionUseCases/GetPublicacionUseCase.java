package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.collections.Comentario;
import com.tallerlispector.src.dtos.ComentarioDTO;
import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.repositories.ComentarioRepository;
import com.tallerlispector.src.repositories.PublicacionRepository;
import com.tallerlispector.src.repositories.UsuarioRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class GetPublicacionUseCase implements Function<String, Mono<PublicacionDTO>> {

    private PublicacionRepository publicacionRepository;
    private MapperUtils mapperUtils;
    private ComentarioRepository comentarioRepository;
    private UsuarioRepository usuarioRepository;

    public GetPublicacionUseCase(PublicacionRepository publicacionRepository, MapperUtils mapperUtils, ComentarioRepository comentarioRepository, UsuarioRepository usuarioRepository) {
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
        this.comentarioRepository = comentarioRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Mono<PublicacionDTO> apply(String id) {
        Objects.requireNonNull(id, "El id es requerido");
        return publicacionRepository.findById(id).map(mapperUtils.mapEntityToPublicacion())
                .flatMap(mapPublicacionAggregate());
    }

    private Function<PublicacionDTO, Mono<PublicacionDTO>> mapPublicacionAggregate() {
        return publicacionDTO ->
                Mono.just(publicacionDTO).zipWith(
                        comentarioRepository.findAllByPublicacionId(publicacionDTO.getId())
                                .map(mapperUtils.mapEntityToComentario())
                                .flatMap(mapUser())
                                .collectList(),
                        (publicacion, comentarios) -> {
                            publicacion.setComentarios(comentarios);
                            return publicacion;
                        }
                );
    }

    private Function<ComentarioDTO, Mono<ComentarioDTO>> mapUser() {
        return comentarioDTO ->
                Mono.just(comentarioDTO).zipWith(
                        usuarioRepository.findById(comentarioDTO.getUserId())
                                .map(mapperUtils.mapEntityToUsuario())
                        ,(comentario, usuario) -> {
                            comentario.setUsuarioDTO(usuario);
                            return comentario;
                        }
                );
    }
}
