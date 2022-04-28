package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.collections.Publicacion;
import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.repositories.PublicacionRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import com.tallerlispector.src.usecases.publicacionUseCases.interfaces.UpdatePublicacion;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class UpdatePublicacionUseCase implements UpdatePublicacion {

    private PublicacionRepository publicacionRepository;
    private MapperUtils mapperUtils;

    public UpdatePublicacionUseCase(PublicacionRepository publicacionRepository, MapperUtils mapperUtils) {
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<String> apply(PublicacionDTO publicacionDTO) {
        Objects.requireNonNull(publicacionDTO.getId(), "El ID no puede estar vacío");
        return publicacionRepository
                .save(mapperUtils.mapperToPublicacion(publicacionDTO.getId()).apply(publicacionDTO))
                .map(Publicacion::getId);
    }
}
