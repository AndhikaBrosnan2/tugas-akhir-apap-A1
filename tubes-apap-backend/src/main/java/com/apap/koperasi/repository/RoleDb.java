package com.apap.koperasi.repository;


import com.apap.koperasi.model.RoleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDb extends JpaRepository<RoleModel, Long> {

    RoleModel findById(int id);
}

