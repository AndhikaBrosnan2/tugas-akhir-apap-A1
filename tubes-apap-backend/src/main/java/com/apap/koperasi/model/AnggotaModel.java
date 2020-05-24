package com.apap.koperasi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

//    @OneToMany(mappedBy = "anggota", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private List<PinjamanModel> daftarPinjaman = new ArrayList<PinjamanModel>();

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "uuid_user", referencedColumnName = "uuid")
//    private UserModel user;
//
//    @OneToMany(mappedBy = "anggota_penyetor", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private List<SimpananModel> daftarSimpananPenyetor = new ArrayList<SimpananModel>();
//
//    @OneToMany(mappedBy = "anggota_penerima", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private List<SimpananModel> daftarSimpananPenerima = new ArrayList<SimpananModel>();

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

    //    public List<PinjamanModel> getDaftarPinjaman() {
//        return daftarPinjaman;
//    }
//
//    public void setDaftarPinjaman(List<PinjamanModel> daftarPinjaman) {
//        this.daftarPinjaman = daftarPinjaman;
//    }
//
//    public UserModel getUser() {
//        return user;
//    }
//
//    public void setUser(UserModel user) {
//        this.user = user;
//    }
//
//
//    public List<SimpananModel> getDaftarSimpananPenyetor() {
//        return daftarSimpananPenyetor;
//    }
//
//    public void setDaftarSimpananPenyetor(List<SimpananModel> daftarSimpananPenyetor) {
//        this.daftarSimpananPenyetor = daftarSimpananPenyetor;
//    }
//
//    public List<SimpananModel> getDaftarSimpananPenerima() {
//        return daftarSimpananPenerima;
//    }
//
//    public void setDaftarSimpananPenerima(List<SimpananModel> daftarSimpananPenerima) {
//        this.daftarSimpananPenerima = daftarSimpananPenerima;
//    }
}