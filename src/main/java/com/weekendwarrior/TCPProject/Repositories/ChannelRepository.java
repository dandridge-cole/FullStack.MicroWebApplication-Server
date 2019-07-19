package com.weekendwarrior.TCPProject.Repositories;

import com.weekendwarrior.TCPProject.Models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ChannelRepository extends JpaRepository<Channel, Integer> {

    Channel getById(Integer id);

   // Channel getDirectChannel(Integer user1, Integer user2);

  //  Channel createDirectChannel(Integer user1, Integer user2);

   // List<Channel> getChannelsByDirectIsTrue();  //getChannelsByDirectTrue();
}
