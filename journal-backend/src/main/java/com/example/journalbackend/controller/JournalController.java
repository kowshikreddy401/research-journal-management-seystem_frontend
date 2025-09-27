package com.example.journalbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.journalbackend.model.Journal;
import com.example.journalbackend.repository.JournalRepository;

import java.util.List;

@RestController
@RequestMapping("/api/journals")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class JournalController {

    @Autowired
    private JournalRepository journalRepository;

    @GetMapping
    public List<Journal> getAllJournals() {
        return journalRepository.findAll();
    }

    @PostMapping
    public Journal addJournal(@RequestBody Journal journal) {
        return journalRepository.save(journal);
    }
}
