package com.apap.kel1.koperasi.controller;

import com.apap.kel1.koperasi.model.PinjamanModel;
import com.apap.kel1.koperasi.service.PinjamanServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PinjamanController {

    @Autowired
    private PinjamanServiceImpl pinjamanService;

    @CrossOrigin
    @RequestMapping(value = "/anggota/{anggota}")
    public List<PinjamanModel> getAllAnggota(@PathVariable String anggota) {
        return pinjamanService.findAll();
    }
}