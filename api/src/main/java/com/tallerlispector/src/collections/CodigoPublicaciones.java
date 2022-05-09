package com.tallerlispector.src.collections;

public class CodigoPublicaciones {

    private String publicacion;
    private String codigoPublicacion;
    private boolean enUso;

    public CodigoPublicaciones(String publicacion, String codigoPublicacion) {
        this.publicacion = publicacion;
        this.codigoPublicacion = codigoPublicacion;
        this.enUso = false;
    }

    public String getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(String publicacion) {
        this.publicacion = publicacion;
    }

    public String getCodigoPublicacion() {
        return codigoPublicacion;
    }

    public void setCodigoPublicacion(String codigoPublicacion) {
        this.codigoPublicacion = codigoPublicacion;
    }

    public boolean isEnUso() {
        return enUso;
    }

    public void setEnUso(boolean enUso) {
        this.enUso = enUso;
    }
}
