package com.apap.koperasi.repository;

import com.apap.koperasi.model.SimpananModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SimpananDb extends JpaRepository<SimpananModel, Long> {

    SimpananModel findById(int id);
}