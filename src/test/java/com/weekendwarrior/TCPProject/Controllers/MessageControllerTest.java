package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.Message;
import com.weekendwarrior.TCPProject.Repositories.MessageRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import java.util.Arrays;
import java.util.List;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class MessageControllerTest {

    @Mock
    private MessageRepository messageRepository;

    @InjectMocks
    private MessageController messageController;


    @Test
    public void getMessagesByChannelId() {
        Message message= createMessageMock();
        when(messageController.getMessagesByChannelId(1)).thenReturn((List<Message>) subData().get(1));
        messageController.getMessagesByChannelId(1);
    }


    @Test
    public void postMessage() {
        Message message= createMessageMock();
        when( messageController.postMessage(message)).thenReturn(message);
        messageController.postMessage(message);
    }

    private Message createMessageMock() { return new Message();}

    private List<Message> subData(){ return Arrays.asList(new Message(), new Message());}

}

