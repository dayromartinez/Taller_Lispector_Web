package com.tallerlispector.src.routers;

import com.tallerlispector.src.collections.Publicacion;
import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.usecases.publicacionUseCases.*;
import com.tallerlispector.src.usecases.usuarioUseCases.GetAllUsersUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;


import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class PublicacionRouter {

    @Bean
    public RouterFunction<ServerResponse> getAll(GetAllPublicacionesUseCase getAllPublicacionesUseCase){
        return route(GET("/getAllPublicaciones"),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(getAllPublicacionesUseCase.get(), PublicacionDTO.class))
        );
    }

    @Bean
    public RouterFunction<ServerResponse> getPublicacion(GetPublicacionUseCase getPublicacionUseCase){
        return route(GET("/getPublicacion/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(getPublicacionUseCase.apply(request.pathVariable("id")), PublicacionDTO.class))
                );
    }

    @Bean
    public RouterFunction<ServerResponse> createPublicacion(CreatePublicacionUseCase createPublicacionUseCase){
        Function<PublicacionDTO, Mono<ServerResponse>> executor = publicacionDTO -> createPublicacionUseCase.apply(publicacionDTO)
                .flatMap(result -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).bodyValue(result));

        return route(POST("/crearPublicacion").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(PublicacionDTO.class).flatMap(executor)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> updatePublicacion(UpdatePublicacionUseCase updatePublicacionUseCase){
        Function<PublicacionDTO, Mono<ServerResponse>> executor = publicacionDTO -> updatePublicacionUseCase.apply(publicacionDTO)
                .flatMap(result -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).bodyValue(result));

        return route(PUT("/actualizarPublicacion").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(PublicacionDTO.class).flatMap(executor)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> deletePublicacion(DeletePublicacionUseCase deletePublicacionUseCase){
        return route(DELETE("/eliminarPublicacion/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.accepted()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(deletePublicacionUseCase.apply(request.pathVariable("id")),
                                Void.class)));
    }
}
