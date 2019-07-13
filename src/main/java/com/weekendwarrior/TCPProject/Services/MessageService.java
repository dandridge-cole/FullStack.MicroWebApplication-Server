package com.weekendwarrior.TCPProject.Services;

import com.weekendwarrior.TCPProject.Models.Message;
import com.weekendwarrior.TCPProject.Repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    MessageService(MessageRepository messageRepository){
        this.messageRepository=messageRepository;
    }

    public List<Message> getMessageByChannel(Integer toChannelId){
        return messageRepository.getMessagesByToChannelId(toChannelId);
    }

    public Message postMessage(Message message){
        return messageRepository.save(message);
    }
}
