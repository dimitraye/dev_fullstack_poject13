package com.example.back.service;


import com.example.back.model.User;

import java.util.List;
import java.util.Optional;

/**
 * Interface that manage the interaction with the Patient entity
 */
public interface IUserService {

    /**
     * Save the user
     * @param user
     * @return
     */
    User save(User user);

    /**
     * Find a user by its Id
     * @param id
     * @return a user
     */
    Optional<User> findUserById(Integer id);

    /**
     * Find all users
     * @return a list of user
     */
    List<User> findAll();


    /**
     * Find a user based on its firstName and lastName
     * @param firstname
     * @param lastname
     * @return a user
     */
    List<User> findByFirstnameAndLastname(String firstname, String lastname);

}
