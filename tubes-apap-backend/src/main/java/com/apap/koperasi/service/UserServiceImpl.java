package com.apap.koperasi.service;

import com.apap.koperasi.model.UserModel;
import com.apap.koperasi.repository.UserDb;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class UserServiceImpl implements com.apap.koperasi.service.UserService {

    @Autowired
    private UserDb userDb;

    @Override
    public UserModel addUser(UserModel user) {
        return userDb.save(user);
    }

    @Override
    public UserModel getUserByUsername(String username) {
        return userDb.findByUsername(username);
    }

    @Override
    public List<UserModel> getAllUser() {
        return userDb.findAll();
    }

    @Override
    public Optional<UserModel> getUserByUuid(String uuid) {
        return userDb.findByUuid(uuid);
    }

}