package com.apap.koperasi.repository;

import com.apap.koperasi.model.AnggotaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnggotaDb extends JpaRepository<AnggotaModel, Long> {

    AnggotaModel findById(int id);

    AnggotaModel findByNia(String nia);
}