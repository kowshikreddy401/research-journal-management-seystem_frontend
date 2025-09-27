package com.example.journalbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.journalbackend.model.Journal;

public interface JournalRepository extends JpaRepository<Journal, Long> {
}
