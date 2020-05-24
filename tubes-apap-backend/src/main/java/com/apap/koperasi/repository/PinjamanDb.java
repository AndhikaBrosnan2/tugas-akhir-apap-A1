package com.apap.koperasi.repository;


import com.apap.koperasi.model.PinjamanModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PinjamanDb extends JpaRepository<PinjamanModel, Long> {

    PinjamanModel findById(int id);
}