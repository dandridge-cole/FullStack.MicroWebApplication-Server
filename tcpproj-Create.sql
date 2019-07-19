CREATE SCHEMA tcpproj;

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
    from_user INTEGER,
    to_channel INTEGER,
    body VARCHAR(255),
    FOREIGN KEY(from_user) REFERENCES users(id),
    FOREIGN KEY(to_channel) REFERENCES channels(id)
);

CREATE TABLE tcpproj.channel_user(
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user INTEGER,
    channel INTEGER,
    FOREIGN KEY(user) REFERENCES users(id),
    FOREIGN KEY(channel) REFERENCES channels(id)
)
