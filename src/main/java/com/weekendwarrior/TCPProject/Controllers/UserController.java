package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.AuthenticationRequest;
import com.weekendwarrior.TCPProject.Models.User;
import com.weekendwarrior.TCPProject.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    public UserController(UserService userService) {
        this.userService=userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Integer id){
        return this.userService.getById(id);
    }

    @GetMapping("/users/auth/{username}/{password}")
    public User authenticateUser(@PathVariable String password, @PathVariable String username) {
        return this.userService.authenticateUser(username, password);
    }

    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser){
        return this.userService.createUser(newUser);
    }



}
