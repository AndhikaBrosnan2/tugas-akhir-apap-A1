package com.apap.koperasi.service;

import com.apap.koperasi.model.AnggotaModel;

import java.util.List;

public interface AnggotaService {

    AnggotaModel addAnggota(AnggotaModel anggota);

    List<AnggotaModel> getAllAnggota();

    AnggotaModel getAnggotaById (int id);

    AnggotaModel getAnggotaByNia (String nia);

    void deleteAnggota(AnggotaModel anggota);
}