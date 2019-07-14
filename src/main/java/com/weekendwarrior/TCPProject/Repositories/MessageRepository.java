package com.weekendwarrior.TCPProject.Repositories;

import com.weekendwarrior.TCPProject.Models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    List<Message> getMessagesByToChannelId(Integer toChannelId);

}
