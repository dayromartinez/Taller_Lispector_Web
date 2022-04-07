package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.repositories.PublicacionRepository;
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
public class UpdatePublicacionUseCase implements Function<PublicacionDTO, Mono<PublicacionDTO>> {

    private PublicacionRepository publicacionRepository;
    private MapperUtils mapperUtils;

    public UpdatePublicacionUseCase(PublicacionRepository publicacionRepository, MapperUtils mapperUtils) {
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<PublicacionDTO> apply(PublicacionDTO publicacionDTO) {
        Objects.requireNonNull(publicacionDTO.getId(), "El ID no puede estar vacío");
        return publicacionRepository.findById(publicacionDTO.getId())
                .flatMap(publicacion -> {
                    publicacion.setNombre(publicacionDTO.getNombre());
                    publicacion.setUrlDocumento(publicacion.getUrlDocumento());
                    publicacion.setNumeroPaginas(publicacion.getNumeroPaginas());
                    publicacion.setDescripcion(publicacion.getDescripcion());
                    publicacion.setComentarios(publicacion.getComentarios());
                    return publicacionRepository.save(publicacion);
                }).map(mapperUtils.mapEntityToPublicacion())
                .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }
}
