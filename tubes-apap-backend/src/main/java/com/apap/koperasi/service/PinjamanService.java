package com.apap.koperasi.service;


import com.apap.koperasi.model.PinjamanModel;

import java.util.List;

public interface PinjamanService {

    PinjamanModel addPinjaman (PinjamanModel pinjaman);

    List<PinjamanModel> getAllPinjaman();

    PinjamanModel getPinjamanById (int id);

    void deletePinjaman(PinjamanModel pinjaman);

}