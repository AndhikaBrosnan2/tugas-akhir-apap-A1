package com.apap.koperasi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

@RequestMapping(value = "/")
    private String home() {
    return "welcome to SI - Koperasi";
    }
}