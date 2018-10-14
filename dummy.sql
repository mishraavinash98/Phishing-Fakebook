-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2018 at 03:18 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dummy`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`email`, `pass`) VALUES
('test@gmail.com', '12345678@'),
('test1@gmail.com', '1225'),
('test1@gmail.com', '1225'),
('test1@gmail.com', '1225'),
('test1@gmail.com', '1225'),
('test1@gmail.com', '1225'),
('test1@gmail.com', '1225'),
('test1@gmail.com', '5451'),
('test1@gmail.com', '5451'),
('test1@gmail.com', '5451'),
('test1@gmail.com', '5451'),
('test1@gmail.com', '4645'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '121511'),
('test1@gmail.com', '8992323'),
('test1@gmail.com', '4645'),
('test1@gmail.com', '464587464151abjhbds');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
