package com.weekendwarrior.TCPProject.Repositories;

import com.weekendwarrior.TCPProject.Models.User;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;


@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {


    User getById(Integer id);


    @Query(value = "SELECT * FROM heroku_884cbef5c97b2c4.user t where t.username = :username and t.password = :password",
    nativeQuery = true)
    User authenticateUser(@Param("username") String username, @Param("password") String passwordToCheck);
}
