package com.example.back.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


/**
 * Model that represent the User
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private Integer id;

    private String firstname;
    private String lastname;

    private boolean isClient;


}