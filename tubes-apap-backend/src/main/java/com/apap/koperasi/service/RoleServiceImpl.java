package com.apap.koperasi.service;


import com.apap.koperasi.model.RoleModel;
import com.apap.koperasi.repository.RoleDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleDb roleDb;

    @Override
    public RoleModel getRoleById(int id) {
        return roleDb.findById(id);
    }

    @Override
    public List<RoleModel> getAllRole() {
        return roleDb.findAll();
    }
}