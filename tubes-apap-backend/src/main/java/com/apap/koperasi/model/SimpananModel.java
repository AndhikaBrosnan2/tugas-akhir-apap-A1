package com.apap.koperasi.model;


import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "simpanan")
public class SimpananModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Column(name = "tanggal_setor", nullable = false)
    private Date tanggal_setor;

    @NotNull
    @Column(name = "jumlah", nullable = false)
    private int jumlah;

    @NotNull
    @Column(name = "id_jenis_simpanan", nullable = false)
    private int id_jenis_simpanan;

    @NotNull
    @Column(name = "id_anggota_penyetor", nullable = false)
    private int id_anggota_penyetor;

    @NotNull
    @Column(name = "id_anggota_penerima", nullable = false)
    private int id_anggota_penerima;

    public SimpananModel(int id, @NotNull Date tanggal_setor, @NotNull int jumlah, @NotNull int id_jenis_simpanan, @NotNull int id_anggota_penyetor, @NotNull int id_anggota_penerima) {
        this.id = id;
        this.tanggal_setor = tanggal_setor;
        this.jumlah = jumlah;
        this.id_jenis_simpanan = id_jenis_simpanan;
        this.id_anggota_penyetor = id_anggota_penyetor;
        this.id_anggota_penerima = id_anggota_penerima;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getTanggal_setor() {
        return tanggal_setor;
    }

    public void setTanggal_setor(Date tanggal_setor) {
        this.tanggal_setor = tanggal_setor;
    }

    public int getJumlah() {
        return jumlah;
    }

    public void setJumlah(int jumlah) {
        this.jumlah = jumlah;
    }

    public int getId_jenis_simpanan() {
        return id_jenis_simpanan;
    }

    public void setId_jenis_simpanan(int id_jenis_simpanan) {
        this.id_jenis_simpanan = id_jenis_simpanan;
    }

    public int getId_anggota_penyetor() {
        return id_anggota_penyetor;
    }

    public void setId_anggota_penyetor(int id_anggota_penyetor) {
        this.id_anggota_penyetor = id_anggota_penyetor;
    }

    public int getId_anggota_penerima() {
        return id_anggota_penerima;
    }

    public void setId_anggota_penerima(int id_anggota_penerima) {
        this.id_anggota_penerima = id_anggota_penerima;
    }

}