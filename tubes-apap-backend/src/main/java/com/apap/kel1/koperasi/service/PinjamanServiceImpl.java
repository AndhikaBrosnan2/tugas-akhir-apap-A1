package com.apap.kel1.koperasi.service;

import com.apap.kel1.koperasi.model.PinjamanModel;
import com.apap.kel1.koperasi.repository.PinjamanDb;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

@Service
public class PinjamanServiceImpl implements PinjamanService {

    @Autowired
    private PinjamanDb pinjamanDb;

    public PinjamanServiceImpl() throws ParseException {
    }

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

    public static List<PinjamanModel> pinjaman = new ArrayList<>();
    private static long id = 0;
    String sDate1="31/12/1998";
    Date tgl_lhr = new SimpleDateFormat("dd/MM/yyyy").parse(sDate1);
    static{
        pinjaman.add(new PinjamanModel());

    }

    public List<PinjamanModel> findAll(){
        return pinjaman;
    }
}