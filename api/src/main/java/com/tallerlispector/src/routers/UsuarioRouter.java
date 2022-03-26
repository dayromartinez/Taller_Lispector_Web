package com.tallerlispector.src.routers;

import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.usecases.CreateUserUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;

import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class UsuarioRouter {

    @Bean
    public RouterFunction<ServerResponse> crearUsuario(CreateUserUseCase createUserUseCase){
        Function<UsuarioDTO, Mono<ServerResponse>> executor = usuarioDTO -> createUserUseCase.apply(usuarioDTO)
                .flatMap(result -> ServerResponse.ok().contentType(MediaType.TEXT_PLAIN).bodyValue(result));
        return route(
                POST("/crearUsuario").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UsuarioDTO.class)
                        .flatMap(executor)
        );
    }
}
