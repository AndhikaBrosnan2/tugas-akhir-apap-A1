package com.apap.koperasi.service;


import com.apap.koperasi.model.AnggotaModel;
import com.apap.koperasi.repository.AnggotaDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AnggotaServiceImpl implements AnggotaService {

    @Autowired
    private AnggotaDb anggotaDb;

    @Override
    public AnggotaModel addAnggota(AnggotaModel anggota) {
        return anggotaDb.save(anggota);
    }

    @Override
    public List<AnggotaModel> getAllAnggota() {
        return anggotaDb.findAll();
    }

    @Override
    public AnggotaModel getAnggotaById(int id) {
        return anggotaDb.findById(id);
    }

    @Override
    public AnggotaModel getAnggotaByNia(String nia) {
        return anggotaDb.findByNia(nia);
    }

    @Override
    public void deleteAnggota(AnggotaModel anggota) {
        anggotaDb.delete(anggota);
    }
}