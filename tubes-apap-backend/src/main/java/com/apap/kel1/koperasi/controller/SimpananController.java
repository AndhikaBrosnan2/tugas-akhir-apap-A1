package com.apap.kel1.koperasi.controller;

import com.apap.kel1.koperasi.model.SimpananModel;
import com.apap.kel1.koperasi.service.SimpananServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SimpananController {

    @Autowired
    private SimpananServiceImpl simpananService;

    @CrossOrigin
    @RequestMapping(value = "/anggota/{anggota}")
    public List<SimpananModel> getAllAnggota(@PathVariable String anggota) {
        return simpananService.findAll();
    }
}