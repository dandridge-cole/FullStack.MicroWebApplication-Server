package com.weekendwarrior.TCPProject.Repositories;

import com.weekendwarrior.TCPProject.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {


    public User getById(Integer id);
}
