package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.Channel;
import com.weekendwarrior.TCPProject.Services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChannelController {

    @Autowired
    ChannelService channelService;

    public ChannelController(ChannelService channelService){
        this.channelService = channelService;
    }

    @GetMapping
    public List<Channel> getAllChannels(){
        return channelService.getAllChannels();

    }

    public Channel getChannelById(Integer id){
        return channelService.getChannelById();

    }
}
