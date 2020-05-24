package com.apap.koperasi.service;

import com.apap.koperasi.model.SimpananModel;

import java.util.List;

public interface SimpananService {

    SimpananModel addSimpanan (SimpananModel simpanan);

    SimpananModel getSimpananById (int id);

    List<SimpananModel> getAllSimpanan();

    void deleteSimpanan(SimpananModel simpanan);
}