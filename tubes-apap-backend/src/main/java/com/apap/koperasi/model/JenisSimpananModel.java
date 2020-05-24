package com.apap.koperasi.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "jenis_simpanan")
public class JenisSimpananModel implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Size(max = 200)
    @Column(name = "nama", nullable = false)
    private String nama;

//    @OneToMany(mappedBy = "jenis_simpanan", fetch = FetchType.LAZY)
//    private List<SimpananModel> daftarSimpanan = new ArrayList<com.apap.koperasi.model.SimpananModel>();


    public Integer getId() {
        return id;
    }

    public String getNama() {
        return nama;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

//    public List<com.apap.koperasi.model.SimpananModel> getDaftarSimpanan() {
//        return daftarSimpanan;
//    }
//
//    public void setDaftarSimpanan(List<com.apap.koperasi.model.SimpananModel> daftarSimpanan) {
//        this.daftarSimpanan = daftarSimpanan;
//    }
}


