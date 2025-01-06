package com.ReclaimSpace.backend_server.Controllers;

import com.ReclaimSpace.backend_server.Models.Comment;
import com.ReclaimSpace.backend_server.Models.User;
import com.ReclaimSpace.backend_server.Services.CommentService;
import com.ReclaimSpace.backend_server.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class helloWorld {
    @Autowired
    private UserService userService;
    @GetMapping("/")
    public ResponseEntity<List<User>> greet() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        System.out.println("response:  "+ users);
        System.out.println("checking: "+ users.getFirst().getName());
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }
};
