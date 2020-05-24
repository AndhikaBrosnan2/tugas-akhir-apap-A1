package com.apap.koperasi.controller;


import com.apap.koperasi.model.PinjamanModel;
import com.apap.koperasi.service.PinjamanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/pinjaman")
@CrossOrigin(origins = "http://localhost:3000")
public class PinjamanController {

    @Autowired
    private PinjamanService pinjamanService;

    @GetMapping(value = "/viewall")
    public List<PinjamanModel> viewAllPinjaman() {
        List<PinjamanModel> allPinjaman = pinjamanService.getAllPinjaman();
        return allPinjaman;
    }

    @GetMapping(value = "/view/{pinjamanId}")
    public PinjamanModel viewPinjaman(@PathVariable("pinjamanId") int pinjamanId){
        PinjamanModel pinjaman = pinjamanService.getPinjamanById(pinjamanId);
        return pinjaman;
    }

    @PostMapping(value = "/add")
    public PinjamanModel addPinjaman (@RequestBody PinjamanModel pinjaman){

        return pinjamanService.addPinjaman(pinjaman);
    }

    @DeleteMapping(value = "/delete/{pinjamanId}")
    public String deletePinjaman(@PathVariable("pinjamanId") int pinjamanId){
        PinjamanModel pinjaman = pinjamanService.getPinjamanById(pinjamanId);
        pinjamanService.deletePinjaman(pinjaman);
        return "success";
    }

}