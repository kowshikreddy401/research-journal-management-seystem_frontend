package com.example.journalbackend.model;

import jakarta.persistence.*;

@Entity
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;

    // getters and setters...
}
