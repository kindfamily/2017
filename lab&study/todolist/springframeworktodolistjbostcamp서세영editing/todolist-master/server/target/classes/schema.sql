CREATE TABLE todo (
	id INT IDENTITY NOT NULL PRIMARY KEY AUTO_INCREMENT,
	todo TEXT,
	completed INT(1) NOT NULL DEFAULT 0,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO todo (id, todo) values (1, 'To do example 1');
INSERT INTO todo (id, todo, completed) values (2, 'To do example 2', 1);