package com.weekendwarrior.TCPProject.Models;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class UserTest {

    private User user;

    @Before
    public void setup(){
        this.user = new User();
    }

    @Test
    public void getIdNull() {
        Assert.assertNull(this.user.getId());
    }

    @Test
    public void setId() {
        Integer expected =1;
        this.user.setId(expected);
        Integer actual = this.user.getId();
        Assert.assertEquals(expected,actual);
    }

    @Test
    public void getUserNameNull() {
        Assert.assertNull(this.user.getUsername());
    }

    @Test
    public void setUserName() {
        String expected = "username";
        this.user.setUsername(expected);
        String actual = this.user.getUsername();
        Assert.assertEquals(expected,actual);
    }

    @Test
    public void getAuthenticated() {
        Assert.assertNull(this.user.getAuthenticated());
    }

    @Test
    public void setAuthenticated() {
        Boolean expected =false;
        this.user.setAuthenticated(expected);
        Boolean actual = this.user.getAuthenticated();
        Assert.assertEquals(expected,actual);
    }
}