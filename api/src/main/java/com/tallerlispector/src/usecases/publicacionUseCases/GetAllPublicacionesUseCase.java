package com.tallerlispector.src.usecases.publicacionUseCases;

import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.repositories.PublicacionRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;

import java.util.function.Supplier;

@Service
@Validated
public class GetAllPublicacionesUseCase implements Supplier<Flux<PublicacionDTO>> {
    private PublicacionRepository publicacionRepository;
    private MapperUtils mapperUtils;

    public GetAllPublicacionesUseCase(PublicacionRepository publicacionRepository, MapperUtils mapperUtils) {
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Flux<PublicacionDTO> get() {
        return publicacionRepository.findAll().map(mapperUtils.mapEntityToPublicacion())
                .switchIfEmpty(Flux.error(new ResponseStatusException(HttpStatus.NOT_FOUND))
        );
    }
}
