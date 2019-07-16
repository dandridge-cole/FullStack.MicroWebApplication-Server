package com.weekendwarrior.TCPProject.Services;

import com.weekendwarrior.TCPProject.Models.AuthenticationRequest;
import com.weekendwarrior.TCPProject.Models.User;
import com.weekendwarrior.TCPProject.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.sql.SQLException;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository=userRepository;
    }

    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }

    public User getById(Integer id){
        return this.userRepository.getById(id);
    }

    public User authenticateUser(String userName, String password) {
        return userRepository.authenticateUser(userName, password);
    }

    public User createUser(User user){
        System.out.println(user);
        return userRepository.save(user);
    }


}
