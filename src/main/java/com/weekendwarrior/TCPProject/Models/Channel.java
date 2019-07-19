package com.weekendwarrior.TCPProject.Models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Channel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private boolean direct;

    /*
    @OneToMany
    List<User> channelMembers;
*/
    public Channel(){

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean getDirect() {
        return this.direct;
    }

    public void setDirect(boolean direct) {
        this.direct = direct;
    }
}
