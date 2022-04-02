package com.tallerlispector.src.dtos;

import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Objects;

public class ComentarioDTO {

    private String id;
    @NotBlank
    private String userId;
    @NotBlank
    private String publicacionId;
    @NotBlank
    private String comentario;
    @NotBlank
    private List<String> fechaComentario;
    @NotBlank
    private int valoracion;

    public ComentarioDTO(String id, String userId, String publicacionId, String comentario, List<String> fechaComentario, int valoracion) {
        this.id = id;
        this.userId = userId;
        this.publicacionId = publicacionId;
        this.comentario = comentario;
        this.fechaComentario = fechaComentario;
        this.valoracion = valoracion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ComentarioDTO that = (ComentarioDTO) o;
        return valoracion == that.valoracion && Objects.equals(id, that.id) && Objects.equals(userId, that.userId) && Objects.equals(publicacionId, that.publicacionId) && Objects.equals(comentario, that.comentario) && Objects.equals(fechaComentario, that.fechaComentario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, publicacionId, comentario, fechaComentario, valoracion);
    }

    @Override
    public String toString() {
        return "ComentarioDTO{" +
                "id='" + id + '\'' +
                ", userId='" + userId + '\'' +
                ", publicacionId='" + publicacionId + '\'' +
                ", comentario='" + comentario + '\'' +
                ", fechaComentario=" + fechaComentario +
                ", valoracion=" + valoracion +
                '}';
    }
}
