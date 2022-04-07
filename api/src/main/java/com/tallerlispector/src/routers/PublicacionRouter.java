package com.tallerlispector.src.routers;

import com.tallerlispector.src.dtos.PublicacionDTO;
import com.tallerlispector.src.usecases.publicacionUseCases.GetAllPublicacionesUseCase;
import com.tallerlispector.src.usecases.publicacionUseCases.GetPublicacionUseCase;
import com.tallerlispector.src.usecases.usuarioUseCases.GetAllUsersUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;

import static java.util.regex.Pattern.accept;
import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
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

}
