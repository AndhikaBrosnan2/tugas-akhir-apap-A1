package com.apap.koperasi.service;


import com.apap.koperasi.model.RoleModel;

import java.util.List;

public interface RoleService {

    RoleModel getRoleById (int id);

    List<RoleModel> getAllRole();
}