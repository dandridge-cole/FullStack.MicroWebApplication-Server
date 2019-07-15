package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.Channel;
import com.weekendwarrior.TCPProject.Repositories.ChannelRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class ChannelControllerTest {

    @Mock
    private ChannelRepository channelRepository;

    @InjectMocks
    private ChannelController channelController;

    @Test
    public void getAllChannels() {
        when(channelController.getAllChannels()).thenReturn(subData());
        channelController.getAllChannels();
        verify(channelRepository, times(1)).findAll();
    }


    @Test
    public void getChannelById() {
        Channel channel= createChannelMock();
        when(channelController.getChannelById(1)).thenReturn(subData().get(1));
        channelController.getChannelById(1);
    }

    private List<Channel> subData() {return Arrays.asList(new Channel(), new Channel());}
    private Channel createChannelMock(){return new Channel ();}


}