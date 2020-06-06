package com.apap.koperasi.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "anggota")
public class AnggotaModel implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Size(max = 200)
    @Column(name = "nia", nullable = false, unique = true)
    private String nia;

    @NotNull
    @Size(max = 200)
    @Column(name = "nama", nullable = false)
    private String nama;

    @NotNull
    @Size(max = 200)
    @Column(name = "ktp", nullable = false)
    private String ktp;

    @NotNull
    @Size(max = 200)
    @Column(name = "tempat_lahir", nullable = false)
    private String tempat_lahir;

    @NotNull
    @Column(name = "tanggal_lahir",nullable = false)
    private Date tanggal_lahir;

    @NotNull
    @Size(max = 200)
    @Column(name = "alamat", nullable = false)
    private String alamat;

    @NotNull
    @Size(max = 200)
    @Column(name = "telepon", nullable = false)
    private String telepon;

    @NotNull
    @Column(name = "is_pengurus", nullable = false)
    private boolean is_pengurus;

    @Size(max = 200)
    @Column(name = "uuid_user")
    private String uuid_user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNia() {
        return nia;
    }

    public void setNia(String nia) {
        this.nia = nia;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getKtp() {
        return ktp;
    }

    public void setKtp(String ktp) {
        this.ktp = ktp;
    }

    public String getTempat_lahir() {
        return tempat_lahir;
    }

    public void setTempat_lahir(String tempat_lahir) {
        this.tempat_lahir = tempat_lahir;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getTelepon() {
        return telepon;
    }

    public void setTelepon(String telepon) {
        this.telepon = telepon;
    }

    public boolean isIs_pengurus() {
        return is_pengurus;
    }

    public void setIs_pengurus(boolean is_pengurus) {
        this.is_pengurus = is_pengurus;
    }

    public Date getTanggal_lahir() {
        return tanggal_lahir;
    }

    public void setTanggal_lahir(Date tanggal_lahir) {
        this.tanggal_lahir = tanggal_lahir;
    }

    public String getUuid_user() {
        return uuid_user;
    }

    public void setUuid_user(String uuid_user) {
        this.uuid_user = uuid_user;
    }

}