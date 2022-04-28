package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.repositories.PublicacionRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import com.tallerlispector.src.usecases.publicacionUseCases.interfaces.SavePublicacion;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

@Service
@Validated
public class CreatePublicacionUseCase implements SavePublicacion {
    private PublicacionRepository publicacionRepository;
    private MapperUtils mapperUtils;

    public CreatePublicacionUseCase(PublicacionRepository publicacionRepository, MapperUtils mapperUtils) {
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Mono<Object> apply(PublicacionDTO publicacionDTO) {
        return publicacionRepository.findById(publicacionDTO.getId()).flatMap(publicacion -> {
            return Mono.error(new ResponseStatusException(HttpStatus.CONFLICT));
        }).switchIfEmpty(publicacionRepository.save(mapperUtils.mapperToPublicacion(null)
                .apply(publicacionDTO)).thenReturn("Publicación agregada"));
    }
}
