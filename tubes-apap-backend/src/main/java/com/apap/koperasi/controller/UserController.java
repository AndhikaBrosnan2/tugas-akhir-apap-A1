package com.apap.koperasi.controller;


import com.apap.koperasi.model.UserModel;
import com.apap.koperasi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController{

    @Autowired
    UserService userService;

    @GetMapping(value = "/viewall")
    public List<UserModel> getAllUser () {
        List<UserModel> allUser = userService.getAllUser();
        return allUser;
    }

    @GetMapping(value = "/view/{uuid}")
    public UserModel userView(@PathVariable("uuid") String uuid){
        UserModel user = userService.getUserByUuid(uuid).get();
        return user;
    }

    @PostMapping(value = "/add")
    public UserModel addUser(@RequestBody UserModel user){
        return userService.addUser(user);
    }
}