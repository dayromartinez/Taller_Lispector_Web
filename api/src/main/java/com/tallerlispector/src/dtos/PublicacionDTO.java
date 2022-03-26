package com.tallerlispector.src.dtos;

import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Objects;

public class PublicacionDTO {

    private String id;
    @NotBlank
    private String nombre;
    @NotBlank
    private String descripcion;
    private String numeroPaginas;
    private String anoLanzamiento;
    @NotBlank
    private List<String> autores;
    private List<String> generos;

    public PublicacionDTO() {
    }

    public PublicacionDTO(String nombre, String descripcion, List<String> autores) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.autores = autores;
    }

    public PublicacionDTO(String nombre, String descripcion, String numeroPaginas, String anoLanzamiento, List<String> autores, List<String> generos) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.numeroPaginas = numeroPaginas;
        this.anoLanzamiento = anoLanzamiento;
        this.autores = autores;
        this.generos = generos;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PublicacionDTO that = (PublicacionDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(descripcion, that.descripcion) && Objects.equals(numeroPaginas, that.numeroPaginas) && Objects.equals(anoLanzamiento, that.anoLanzamiento) && Objects.equals(autores, that.autores) && Objects.equals(generos, that.generos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, descripcion, numeroPaginas, anoLanzamiento, autores, generos);
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
                '}';
    }
}
