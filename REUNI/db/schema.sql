#<<<<<<< reuni_castillo

CREATE DATABASE IF NOT EXISTS reunify_db;
USE reunify_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS students;

# Create the students table
CREATE TABLE students (
student_id int NOT NULL PRIMARY KEY,
student_name varchar(255) NOT NULL,
student_photo varchar(255) NOT NULL,
grade_level varchar(2) NOT NULL,
parent_name varchar(255) NOT NULL,
parent_addr varchar(255) NOT NULL,
parent_csz varchar(255) NOT NULL,
parent_govt_id int NOT NULL,
reunify_pnt varchar(20) NOT NULL,
student_status varchar(100) NOT NULL ON UPDATE CURRENT_TIMESTAMP
);



# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS release_stud;

# Create the release student table
CREATE TABLE release_stud (
student_id int NOT NULL PRIMARY KEY,
parent_govt_id int NOT NULL,
time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS checkin_parent;

# Create the parent check-in table
CREATE TABLE checkin_parent (
parent_govt_id int NOT NULL PRIMARY KEY,
parent_name varchar(255) NOT NULL,
time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS reunify_points;

# Create the reunify points table
CREATE TABLE reunify_points (
reunify_point_id varchar(100) NOT NULL PRIMARY KEY,
reunify_point_count int NOT NULL DEFAULT 0,
time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
=======
