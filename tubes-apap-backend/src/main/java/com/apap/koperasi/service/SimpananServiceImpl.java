package com.apap.koperasi.service;

import com.apap.koperasi.model.SimpananModel;
import com.apap.koperasi.repository.SimpananDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SimpananServiceImpl implements SimpananService {

    @Autowired
    private SimpananDb simpananDb;


    @Override
    public SimpananModel addSimpanan(SimpananModel simpanan) {
        return simpananDb.save(simpanan);
    }

    @Override
    public SimpananModel getSimpananById(int id) {
        return simpananDb.findById(id);
    }

    @Override
    public List<SimpananModel> getAllSimpanan() {
        return simpananDb.findAll();
    }

    @Override
    public void deleteSimpanan(SimpananModel simpanan) {
        simpananDb.delete(simpanan);
    }
}