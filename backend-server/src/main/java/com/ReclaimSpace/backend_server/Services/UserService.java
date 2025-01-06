package com.ReclaimSpace.backend_server.Services;

import com.ReclaimSpace.backend_server.Models.User;
import com.ReclaimSpace.backend_server.Repositories.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        List<User> users = userRepository.findAll();
        System.out.println("Fetched Users: " + users); // Add a log to check if data is being fetched
        return users;
    }
}
