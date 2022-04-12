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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPublicacionId() {
        return publicacionId;
    }

    public void setPublicacionId(String publicacionId) {
        this.publicacionId = publicacionId;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public List<String> getFechaComentario() {
        return fechaComentario;
    }

    public void setFechaComentario(List<String> fechaComentario) {
        this.fechaComentario = fechaComentario;
    }

    public int getValoracion() {
        return valoracion;
    }

    public void setValoracion(int valoracion) {
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
