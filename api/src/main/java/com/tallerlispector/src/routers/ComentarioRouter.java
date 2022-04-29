package com.tallerlispector.src.routers;

import com.tallerlispector.src.dtos.ComentarioDTO;
import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.usecases.comentaryUseCases.AddComentaryUseCase;
import com.tallerlispector.src.usecases.comentaryUseCases.DeleteComentarioUseCase;
import com.tallerlispector.src.usecases.comentaryUseCases.UpdateComentarioUseCase;
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
public class ComentarioRouter {

    @Bean
    public RouterFunction<ServerResponse> createComentario(AddComentaryUseCase addComentaryUseCase){
        Function<ComentarioDTO, Mono<ServerResponse>> executor = comentarioDTO -> addComentaryUseCase
                .saveComentario(comentarioDTO).flatMap(result -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON).bodyValue(result));

        return route(POST("/crearComentario").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(ComentarioDTO.class).flatMap(executor)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> updateComentario(UpdateComentarioUseCase updateComentarioUseCase) {
        Function<ComentarioDTO, Mono<ServerResponse>> executor = comentarioDTO -> updateComentarioUseCase.apply(comentarioDTO)
                .flatMap(result -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).bodyValue(result));

        return route(PUT("/actualizarComentario").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(ComentarioDTO.class).flatMap(executor)
                );
    }

    @Bean
    public RouterFunction<ServerResponse> deleteComentario(DeleteComentarioUseCase deleteComentarioUseCase){
        return route(DELETE("/eliminarComentario/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.accepted()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(deleteComentarioUseCase.apply(request.pathVariable("id")),
                                Void.class))
                );
    }
}
