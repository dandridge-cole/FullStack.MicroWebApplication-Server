package com.weekendwarrior.TCPProject.Services;

import com.weekendwarrior.TCPProject.Models.Message;
import com.weekendwarrior.TCPProject.Repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    List<Message> messageList;
    Comparator<Message> compareById = Comparator.comparing(Message::getId);


    MessageService(MessageRepository messageRepository){
        this.messageRepository=messageRepository;
    }

    public List<Message> getMessageByChannel(Integer toChannelId){
        messageList = messageRepository.getMessagesByToChannelId(toChannelId);

        Collections.sort(messageList, compareById.reversed());

        return messageList;
    }

    public Message postMessage(Message message){
        return messageRepository.save(message);
    }



}
