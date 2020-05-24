package com.apap.koperasi.service;

import com.apap.koperasi.model.AnggotaModel;
import com.apap.koperasi.model.UserModel;

import java.util.List;
import java.util.Optional;

public interface UserService {

    UserModel addUser (UserModel user);
    UserModel getUserByUsername(String username);
    List<UserModel> getAllUser();
    Optional<UserModel> getUserByUuid(String uuid);

}