DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN,
	/* Set ID as primary key */
	PRIMARY KEY ( id )
);
