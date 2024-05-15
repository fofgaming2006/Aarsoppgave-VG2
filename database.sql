-- Create the database named weatherapp if it doesn't exist
CREATE DATABASE IF NOT EXISTS weatherapp;
 
-- Switch to the weatherapp database
USE weatherapp;
 
-- Drop the Users table if it already exists to avoid conflicts
DROP TABLE IF EXISTS Users;
 
-- Create the Users table with the specified fields and constraints
CREATE TABLE Users (
  UserID INT(11) NOT NULL AUTO_INCREMENT,  -- Unique identifier, auto-incrementing
  Username VARCHAR(255) NOT NULL UNIQUE,  -- Username field, must be unique
  Password VARCHAR(255) NOT NULL,         -- Password field
  PRIMARY KEY (UserID)                     -- Set UserID as the primary key
);
