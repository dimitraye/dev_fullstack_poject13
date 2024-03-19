package com.example.back.service;


import com.example.back.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Slf4j
@Service
public class UserServiceImpl implements IUserService{

    private final List<User> users = new ArrayList<>();
    private int nextId = 1;
    @Override
    public User save(User user) {
        user.setId(nextId++);
        users.add(user);
        return user;
    }


    @Override
    public Optional<User> findUserById(Integer id) {
        for (User user : users) {
            if (user.getId().equals(id)) {
                return Optional.of(user);
            }
        }
        return null;
    }

    @Override
    public List<User> findAll() {
        return users;
    }

    @Override
    public List<User> findByFirstnameAndLastname(String firstname, String lastname) {
        return null;
    }

    @Override
    public String paramTojson(String paramIn) {
        if (paramIn.startsWith("{")) {
            log.info("Param already in Json format");
            return paramIn;
        }
        paramIn = paramIn.replaceAll("=", "\":\"");
        paramIn = paramIn.replaceAll("&", "\",\"");
        return "{\"" + paramIn + "\"}";
    }


}
