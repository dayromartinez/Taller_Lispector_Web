package com.tallerlispector.src.dtos;

import com.tallerlispector.src.collections.Comentario;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class PublicacionDTO {

    private String id;
    @NotBlank
    private String nombre;
    @NotBlank
    private String descripcion;
    private String numeroPaginas;
    @NotBlank
    private String anoLanzamiento;
    private List<String> autores;
    private List<String> generos;
    @NotBlank
    private String urlDocumento;
    private List<ComentarioDTO> comentarios;

    public PublicacionDTO() {
    }

    public PublicacionDTO(String id, String nombre, String descripcion, String numeroPaginas, String anoLanzamiento, List<String> autores, String urlDocumento, List<String> generos) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.numeroPaginas = numeroPaginas;
        this.anoLanzamiento = anoLanzamiento;
        this.autores = autores;
        this.urlDocumento = urlDocumento;
        this.generos = generos;
        this.comentarios = new ArrayList<ComentarioDTO>();
    }

    public List<ComentarioDTO> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<ComentarioDTO> comentarios) {
        this.comentarios = comentarios;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNumeroPaginas() {
        return numeroPaginas;
    }

    public void setNumeroPaginas(String numeroPaginas) {
        this.numeroPaginas = numeroPaginas;
    }

    public String getAnoLanzamiento() {
        return anoLanzamiento;
    }

    public void setAnoLanzamiento(String anoLanzamiento) {
        this.anoLanzamiento = anoLanzamiento;
    }

    public List<String> getAutores() {
        return autores;
    }

    public void setAutores(List<String> autores) {
        this.autores = autores;
    }

    public List<String> getGeneros() {
        return generos;
    }

    public void setGeneros(List<String> generos) {
        this.generos = generos;
    }

    public String getUrlDocumento() {
        return urlDocumento;
    }

    public void setUrlDocumento(String urlDocumento) {
        this.urlDocumento = urlDocumento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PublicacionDTO that = (PublicacionDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(descripcion, that.descripcion) && Objects.equals(numeroPaginas, that.numeroPaginas) && Objects.equals(anoLanzamiento, that.anoLanzamiento) && Objects.equals(autores, that.autores) && Objects.equals(generos, that.generos) && Objects.equals(urlDocumento, that.urlDocumento) && Objects.equals(comentarios, that.comentarios);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, descripcion, numeroPaginas, anoLanzamiento, autores, generos, urlDocumento, comentarios);
    }

    @Override
    public String toString() {
        return "PublicacionDTO{" +
                "id='" + id + '\'' +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", numeroPaginas='" + numeroPaginas + '\'' +
                ", anoLanzamiento='" + anoLanzamiento + '\'' +
                ", autores=" + autores +
                ", generos=" + generos +
                ", urlDocumento='" + urlDocumento + '\'' +
                ", comentarios=" + comentarios +
                '}';
    }
}
