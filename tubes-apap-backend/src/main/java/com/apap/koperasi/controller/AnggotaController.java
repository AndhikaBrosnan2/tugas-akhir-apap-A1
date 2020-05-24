package com.apap.koperasi.controller;


import com.apap.koperasi.model.AnggotaModel;
import com.apap.koperasi.service.AnggotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/anggota")
@CrossOrigin(origins = "http://localhost:3000")
public class AnggotaController {

    @Autowired
    private AnggotaService anggotaService;

    @GetMapping(value = "/viewall")
    public List<AnggotaModel> viewAllAnggota() {
        List<AnggotaModel> allAnggota = anggotaService.getAllAnggota();
        return allAnggota;
    }

    @GetMapping(value = "/view/{anggotaId}")
    public AnggotaModel viewAnggota(@PathVariable("anggotaId") int anggotaId){
        AnggotaModel anggota = anggotaService.getAnggotaById(anggotaId);
        return anggota;
    }

    @PostMapping(value = "/add")
    public AnggotaModel addAnggota (@RequestBody AnggotaModel anggota){
        String nia = String.valueOf(getRandomNia());
        anggota.setNia(nia);
        anggota.setUuid_user("uudi456");
        return anggotaService.addAnggota(anggota);
    }

    @DeleteMapping(value = "/delete/{anggotaId}")
    public String deleteAnggota(@PathVariable("anggotaId") int anggotaId){
        AnggotaModel anggota = anggotaService.getAnggotaById(anggotaId);
        anggotaService.deleteAnggota(anggota);
        return "success";
    }

    public int getRandomNia() {
        int n = 10000000 + new Random().nextInt(99999999);
        return n;
    }
}