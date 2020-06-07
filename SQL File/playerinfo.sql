-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2017 at 04:44 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playerinfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `player_info`
--

CREATE TABLE `player_info` (
  `Player_ID` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `Player_score` int(50) DEFAULT NULL,
  `Class` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `player_info`
--

INSERT INTO `player_info` (`Player_ID`, `username`, `password`, `Player_score`, `Class`) VALUES
(1, 'truebubbleblast', '2f6bd83e93c5330a6cdeccf74346fdd0', 545, 'Gunner'),
(27, 'labyrinth', '81dc9bdb52d04dc20036dbd8313ed055', 461, 'Knight'),
(30, 'kimiya98', '6e3e849bfc76045f4a794d00c0a5c898', NULL, ''),
(32, '', 'd41d8cd98f00b204e9800998ecf8427e', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `team_scores`
--

CREATE TABLE `team_scores` (
  `team_id` int(11) NOT NULL,
  `team_name` varchar(20) NOT NULL,
  `player1` varchar(20) NOT NULL,
  `player2` varchar(20) NOT NULL,
  `score` int(10) DEFAULT NULL,
  `player1Class` varchar(20) NOT NULL,
  `player2Class` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team_scores`
--

INSERT INTO `team_scores` (`team_id`, `team_name`, `player1`, `player2`, `score`, `player1Class`, `player2Class`) VALUES
(1, 'ETC', 'testing', 'testing', NULL, '', ''),
(2, '', 'test2', 'test2', NULL, '', ''),
(3, '', 'testing2', 'testing2', NULL, '', ''),
(11, '', 'hala', 'hala', 290, '', ''),
(12, '', 'pen', 'nic', NULL, '', ''),
(13, 'GG', 'new', 'new', 20, 'Knight', 'Gunner');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `player_info`
--
ALTER TABLE `player_info`
  ADD PRIMARY KEY (`Player_ID`);

--
-- Indexes for table `team_scores`
--
ALTER TABLE `team_scores`
  ADD PRIMARY KEY (`team_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `player_info`
--
ALTER TABLE `player_info`
  MODIFY `Player_ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `team_scores`
--
ALTER TABLE `team_scores`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
