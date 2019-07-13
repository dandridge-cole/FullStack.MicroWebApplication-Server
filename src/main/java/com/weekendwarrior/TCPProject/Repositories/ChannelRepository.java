package com.weekendwarrior.TCPProject.Repositories;

import com.weekendwarrior.TCPProject.Models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ChannelRepository extends JpaRepository<Channel, Integer> {

    Channel getById(Integer id);

}
