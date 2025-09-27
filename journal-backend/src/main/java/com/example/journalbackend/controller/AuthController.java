package com.example.journalbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.journalbackend.model.User;
import com.example.journalbackend.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "User already exists";
        }
        userRepository.save(user);
        return "Signup successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userRepository.findByEmail(user.getEmail())
                .map(u -> u.getPassword().equals(user.getPassword())
                        ? "Login successful"
                        : "Invalid password")
                .orElse("User not found");
    }
}