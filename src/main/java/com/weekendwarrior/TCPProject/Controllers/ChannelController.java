package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.Channel;
import com.weekendwarrior.TCPProject.Services.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ChannelController {

    @Autowired
    ChannelService channelService;

    public ChannelController(ChannelService channelService){
        this.channelService = channelService;
    }

    @GetMapping("/channels")
    public List<Channel> getAllChannels(){
        return channelService.getAllChannels();

    }

    @GetMapping("/channels/{id}")
    public Channel getChannelById(@PathVariable Integer id){
     return channelService.getChannelById(id);

    }




}
