package com.apap.kel1.koperasi.service;


import com.apap.kel1.koperasi.model.PinjamanModel;
import com.apap.kel1.koperasi.repository.PinjamanDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PinjamanServiceImpl implements PinjamanService {

    @Autowired
    private PinjamanDb pinjamanDb;


    @Override
    public PinjamanModel addPinjaman(PinjamanModel pinjaman) {
        return pinjamanDb.save(pinjaman);
    }

    @Override
    public List<PinjamanModel> getAllPinjaman() {
        return pinjamanDb.findAll();
    }

    @Override
    public PinjamanModel getPinjamanById(int id) {
        return pinjamanDb.findById(id);
    }
}