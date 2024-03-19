package com.example.back.controller;

import com.example.back.model.User;
import com.example.back.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Integer id) {
        return userService.findUserById(id);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.findAll();
    }
}