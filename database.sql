CREATE DATABASE body_of_christ_church;

USE body_of_christ_church;

CREATE TABLE adult_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    zip VARCHAR(20),
    emergency_contact_name VARCHAR(255),
    emergency_contact_phone VARCHAR(50),
    emergency_contact_relation VARCHAR(100),
    registration_type VARCHAR(100)
);

CREATE TABLE child_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    birthdate DATE,
    age INT,
    grade VARCHAR(10),
    gender VARCHAR(20),
    parent_name VARCHAR(255),
    parent_phone VARCHAR(50),
    parent_email VARCHAR(255),
    registration_type VARCHAR(100),
    health_status TEXT,
    allergies TEXT,
    health_details TEXT
);
