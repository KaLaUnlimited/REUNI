DROP DATABASE IF EXISTS `reunifyDB`;


CREATE DATABASE `reunifyDB`;
Use studentBio;


CREATE TABLE students

(
	StudentID int (10) NOT NULL,
	StudentName VARCHAR(255),
	StudentPhoto varchar(255),
	GradeLevel INT (4),
	HomeroomTeacher VARCHAR(255),
	DriversID int (14) NOT NULL,
	ParentName varchar(255) NOT NULL,
	ParentName2 varchar(255),

	PRIMARY KEY (StudentID)
);