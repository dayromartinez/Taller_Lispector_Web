package com.tallerlispector.src.routers;

import com.tallerlispector.src.dtos.UsuarioDTO;
import com.tallerlispector.src.usecases.*;
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
public class UsuarioRouter {

    @Bean
    public RouterFunction<ServerResponse> getAllUsers(GetAllUsersUseCase getAllUsersUseCase){
        return route(GET("/getAllUsers"),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(getAllUsersUseCase.get(), UsuarioDTO.class))
        );
    }

    @Bean
    public RouterFunction<ServerResponse> getUser(GetUserUseCase getUserUseCase){
        return route(GET("/getUser/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(getUserUseCase.apply(request.pathVariable("id")),
                                UsuarioDTO.class))
        );
    }

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

    @Bean
    public RouterFunction<ServerResponse> updateUser(UpdateUserUseCase updateUserUseCase){
        Function<UsuarioDTO, Mono<ServerResponse>> executor = usuarioDTO -> updateUserUseCase.apply(usuarioDTO)
                .flatMap(result -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).bodyValue(result));
        return route(
                PUT("/actualizarUsuario").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UsuarioDTO.class).flatMap(executor)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> deleteUser(DeleteUserUseCase deleteUserUseCase){
        return route(DELETE("/eliminarUsuario/{id}").and(accept(MediaType.APPLICATION_JSON)),
        request -> ServerResponse.accepted()
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromPublisher(deleteUserUseCase.apply(request.pathVariable("id")), Void.class)));
    }
}
