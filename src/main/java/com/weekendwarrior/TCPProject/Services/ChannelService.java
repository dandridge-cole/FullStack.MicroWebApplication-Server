package com.weekendwarrior.TCPProject.Services;

import com.weekendwarrior.TCPProject.Models.Channel;
import com.weekendwarrior.TCPProject.Repositories.ChannelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChannelService {
    @Autowired
    ChannelRepository channelRepository;

    public ChannelService(ChannelRepository channelRepository){
        this.channelRepository=channelRepository;

    }

    public List<Channel> getAllChannels(){
        return channelRepository.findAll();
    }

    public Channel getChannelById(Integer id){
        return channelRepository.getById(id);
    }
/*
    public Channel getDirectChannel(Integer user1, Integer user2){
        List<Channel> directChannels = getDirectChannels();
        for (Channel channel:directChannels){

        }
        Channel checkChannel = channelRepository.getDirectChannel(user1,user2);
        if(checkChannel!=null)return checkChannel;
        return channelRepository.createDirectChannel(user1,user2);
    }

    public List<Channel> getDirectChannels(){
        return channelRepository.getChannelsByDirectIsTrue();
    }
*/
}
