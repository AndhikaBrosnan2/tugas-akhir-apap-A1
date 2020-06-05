package com.apap.kel1.koperasi.service;

import com.apap.kel1.koperasi.model.SimpananModel;
import com.apap.kel1.koperasi.repository.SimpananDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

@Service
public class SimpananServiceImpl implements SimpananService {

    @Autowired
    private SimpananDb simpananDb;

    public SimpananServiceImpl() throws ParseException {
    }

    @Override
    public SimpananModel addSimpanan(SimpananModel simpanan) {
        return simpananDb.save(simpanan);
    }

    @Override
    public List<SimpananModel> getAllSimpanan() {
        return simpananDb.findAll();
    }

    @Override
    public SimpananModel getSimpananById(int id) {
        return simpananDb.findById(id);
    }

    public static List<SimpananModel> simpanan = new ArrayList<>();
    private static long id = 0;
    String sDate1="31/12/1998";
    Date tgl_lhr = new SimpleDateFormat("dd/MM/yyyy").parse(sDate1);
    static{
        simpanan.add(new SimpananModel());

    }

    public List<SimpananModel> findAll(){
        return simpanan;
    }
}