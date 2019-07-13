INSERT INTO tcpproj.users (username,password)
    VALUES ("corby", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("anish", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("bouncy", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("spooky", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("cato", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("coolbeans", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("bliskov", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("bagelbomb", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("doge", "password");
INSERT INTO tcpproj.users (username,password)
    VALUES ("puppies", "password");
INSERT INTO tcpproj.channels (name,direct)
    VALUES ("travel", FALSE);
INSERT INTO tcpproj.channels (name,direct)
    VALUES ("discovery", FALSE);
INSERT INTO tcpproj.channels (name,direct)
    VALUES ("weather", FALSE);
INSERT INTO tcpproj.channels (name,direct)
    VALUES ("travel", FALSE);
INSERT INTO tcpproj.channels (name,direct)
    VALUES ("natgeo", FALSE);
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (1,1,"This is a message.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (1,1,"This is another message.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (2,1,"You said that already.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (3,1,"Be nice.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (3,2,"Look, another channel.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (2,2,"But this one isn't default.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (5,3,"So many users.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (4,4,"My favorite channel.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (7,3,"Zip Code Rocks!");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (6,3,"Cohort 5.1 ftw!");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (8,4,"Ok, it;s getting late.");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (9,4,"Just one more, please?");
INSERT INTO tcpproj.messages (fromUser,toChannel,body)
	VALUES (10,4,"That's all, folks.");
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (1,2);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (1,3);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (1,4);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (2,2);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (2,3);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (2,4);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (3,1);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (3,2);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (4,1);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (4,3);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (5,1);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (5,3);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (6,2);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (6,4);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (7,4);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (8,4);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (9,4);
INSERT INTO tcpproj.channel_user (user,channel)
	VALUES (10,4);