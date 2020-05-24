package com.apap.koperasi.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "role")
public class RoleModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Size(max = 200)
    @Column(name = "nama", nullable = false)
    private String nama;

//    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
//    //@JsonIgnore
//    private List<UserModel> daftarUser = new ArrayList<UserModel>();


    public void setId(int id) {
        this.id = id;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public Integer getId() {
        return id;
    }

    public String getNama() {
        return nama;
    }

//    public List<UserModel> getDaftarUser() {
//        return daftarUser;
//    }
//
//    public void setDaftarUser(List<UserModel> daftarUser) {
//        this.daftarUser = daftarUser;
//    }
}