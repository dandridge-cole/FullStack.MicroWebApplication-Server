package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.User;
import com.weekendwarrior.TCPProject.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserContoller {

    @Autowired
    UserService userService;

    public UserContoller(UserService userService) {
        this.userService=userService;
    }

    public List<User> getAllUsers(){
        return this.userService.getAllUsers();
    }

    public User getUserById(Integer id){
        return this.userService.getById(id);
    }
}
