CREATE SCHEMA tpcproj;

CREATE TABLE tcpproj.users(
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE tcpproj.channels(
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    direct BOOLEAN NOT NULL
);

CREATE TABLE tcpproj.messages(
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fromUser INTEGER,
    toChannel INTEGER,
    FOREIGN KEY(fromUser) REFERENCES users(id),
    FOREIGN KEY(toChannel) REFERENCES channels(id)
);

CREATE TABLE tcpproj.channel_user(
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user INTEGER,
    channel INTEGER,
    FOREIGN KEY(user) REFERENCES users(id),
    FOREIGN KEY(channel) REFERENCES channels(id)
)
