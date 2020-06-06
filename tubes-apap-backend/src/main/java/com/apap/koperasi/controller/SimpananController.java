package com.apap.koperasi.controller;


import com.apap.koperasi.model.SimpananModel;
import com.apap.koperasi.service.SimpananService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/simpanan")
@CrossOrigin(origins = "http://localhost:3000")
public class SimpananController {

    @Autowired
    private SimpananService simpananService;

    @GetMapping(value = "/viewall")
    public List<SimpananModel> viewAllSimpanan() {
        List<SimpananModel> allSimpanan = simpananService.getAllSimpanan();
        return allSimpanan;
    }

    @GetMapping(value = "/view/{simpananId}")
    public SimpananModel viewSimpanan(@PathVariable("simpananId") int simpananId){
        SimpananModel simpanan = simpananService.getSimpananById(simpananId);
        return simpanan;
    }

    @PostMapping(value = "/add")
    public SimpananModel addSimpanan (@RequestBody SimpananModel simpanan){
        return simpananService.addSimpanan(simpanan);
    }

    @DeleteMapping(value = "/delete/{simpananId}")
    public String deleteSimpanan(@PathVariable("simpananId") int simpananId){
        SimpananModel simpanan = simpananService.getSimpananById(simpananId);
        simpananService.deleteSimpanan(simpanan);
        return "success";
    }

    public int getRandomNia() {
        int n = 10000000 + new Random().nextInt(99999999);
        return n;
    }
}