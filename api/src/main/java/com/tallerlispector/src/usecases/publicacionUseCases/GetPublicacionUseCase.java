package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.repositories.PublicacionRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.function.Function;

@Service
@Validated
public class GetPublicacionUseCase implements Function<String, Mono<PublicacionDTO>> {

    private PublicacionRepository publicacionRepository;
    private MapperUtils mapperUtils;

    public GetPublicacionUseCase(PublicacionRepository publicacionRepository, MapperUtils mapperUtils) {
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<PublicacionDTO> apply(String id) {
        return publicacionRepository.findById(id).map(mapperUtils.mapEntityToPublicacion())
                .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }
}
