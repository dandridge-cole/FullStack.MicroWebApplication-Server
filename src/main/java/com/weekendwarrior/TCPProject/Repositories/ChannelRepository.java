package com.weekendwarrior.TCPProject.Repositories;

import com.weekendwarrior.TCPProject.Models.Channel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChannelRepository extends JpaRepository<Channel, Integer> {


}
