package com.tallerlispector.src.usecases.comentaryUseCases;

import com.tallerlispector.src.dtos.ComentarioDTO;
import com.tallerlispector.src.repositories.ComentarioRepository;
import com.tallerlispector.src.repositories.PublicacionRepository;
import com.tallerlispector.src.repositories.UsuarioRepository;
import com.tallerlispector.src.usecases.MapperUtils;
import com.tallerlispector.src.usecases.comentaryUseCases.interfaces.SaveComentario;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@Service
@Validated
public class AddComentaryUseCase implements SaveComentario {

    private final ComentarioRepository comentarioRepository;
    private final UsuarioRepository usuarioRepository;
    private final PublicacionRepository publicacionRepository;
    private final MapperUtils mapperUtils;


    public AddComentaryUseCase(ComentarioRepository comentarioRepository, UsuarioRepository usuarioRepository, PublicacionRepository publicacionRepository, MapperUtils mapperUtils) {
        this.comentarioRepository = comentarioRepository;
        this.usuarioRepository = usuarioRepository;
        this.publicacionRepository = publicacionRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Mono<ComentarioDTO> saveComentario(ComentarioDTO comentarioDTO) {
        LocalDateTime fechaYHora = LocalDateTime.now();
        DateTimeFormatter isoHora = DateTimeFormatter.ISO_LOCAL_TIME;
        String horaConvertida = fechaYHora.format(isoHora).toString();
        String[] hora = horaConvertida.split("\\.");
        DateTimeFormatter isoFecha = DateTimeFormatter.ISO_LOCAL_DATE;
        String fechaConvertida = fechaYHora.format(isoFecha).toString();
        ArrayList<String> fechaHora = new ArrayList<String>();
        fechaHora.add(fechaConvertida);
        fechaHora.add(hora[0]);
        comentarioDTO.setFechaComentario(fechaHora);

        return comentarioRepository.save(mapperUtils.mapperToComentario(comentarioDTO.getId()).apply(comentarioDTO)).map(comentario -> mapperUtils.mapEntityToComentario().apply(comentario));
    }
}
