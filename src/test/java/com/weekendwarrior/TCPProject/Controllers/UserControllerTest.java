package com.weekendwarrior.TCPProject.Controllers;

import com.weekendwarrior.TCPProject.Models.User;
import com.weekendwarrior.TCPProject.Repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserController userController;

    @Test
    public void getAllUsers() {
        when(userController.getAllUsers()).thenReturn(subData());
        userController.getAllUsers();
        verify(userRepository, times(1)).findAll();
    }

    @Test
    public void getUserById() {
        User user = createUserMock();
        when(userController.getUserById(1)).thenReturn(subData().get(1));
        userController.getUserById(1);
     //   verify(user, times(1)).getOne(1);
    }

    private List<User> subData() {return Arrays.asList(new User(), new User());}

    private User createUserMock(){return new User ();}
}