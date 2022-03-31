package com.tallerlispector.src.dtos;

import com.tallerlispector.src.utils.Rol;

import javax.validation.constraints.NotBlank;
import java.util.Objects;

public class UsuarioDTO {

    private String id;
    @NotBlank
    private String nombre;
    @NotBlank
    private String correo;
    private String imageUser;
    private String celular;
    private Rol rol;
    private String codigoPublicacionPostales;
    @NotBlank
    private String contrasena;

    public UsuarioDTO(String id, String nombre, String correo, String celular, String contrasena) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = Rol.usuario;
        this.contrasena = contrasena;
        this.celular = celular;
        this.codigoPublicacionPostales = "";
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

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getImageUser() {
        return imageUser;
    }

    public void setImageUser(String imageUser) {
        this.imageUser = imageUser;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    public String getCodigoPublicacionPostales() {
        return codigoPublicacionPostales;
    }

    public void setCodigoPublicacionPostales(String codigoPublicacionPostales) {
        this.codigoPublicacionPostales = codigoPublicacionPostales;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsuarioDTO that = (UsuarioDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(correo, that.correo) && Objects.equals(imageUser, that.imageUser) && Objects.equals(celular, that.celular) && rol == that.rol && Objects.equals(codigoPublicacionPostales, that.codigoPublicacionPostales) && Objects.equals(contrasena, that.contrasena);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, correo, imageUser, celular, rol, codigoPublicacionPostales, contrasena);
    }

    @Override
    public String toString() {
        return "UsuarioDTO{" +
                "id='" + id + '\'' +
                ", nombre='" + nombre + '\'' +
                ", correo='" + correo + '\'' +
                ", imageUser='" + imageUser + '\'' +
                ", celular='" + celular + '\'' +
                ", rol=" + rol +
                ", codigoPublicacionPostales='" + codigoPublicacionPostales + '\'' +
                ", contrasena='" + contrasena + '\'' +
                '}';
    }
}
