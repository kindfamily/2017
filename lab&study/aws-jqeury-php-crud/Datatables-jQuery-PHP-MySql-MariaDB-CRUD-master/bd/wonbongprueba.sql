-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 17-06-27 06:07
-- 서버 버전: 5.6.36
-- PHP 버전: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `prueba`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `todolist`
--

CREATE TABLE `todolist` (
  `id` int(11) NOT NULL,
  `todo` varchar(100) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `todolist`
--

INSERT INTO `todolist` (`id`, `todo`, `created`) VALUES
(1, '밥먹기', '2017-06-27 22:04:00');

-- --------------------------------------------------------

--
-- 테이블 구조 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `user`
--

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(1, 'root', '17442638');

-- --------------------------------------------------------

--
-- 테이블 구조 `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `apellidos` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `dni` varchar(8) COLLATE latin1_spanish_ci NOT NULL,
  `estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- 테이블의 덤프 데이터 `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre`, `apellidos`, `dni`, `estado`) VALUES
(1, 'Angelo', 'Uriol', '48125800', 1),
(2, 'Petter', 'Ríos', '49051200', 1),
(3, 'Jorge', 'Ríos', '22526385', 1),
(4, 'Amelia', 'Abarca', '25123653', 1),
(5, 'Geovanny', 'Ríos', '47859612', 1),
(6, 'Benita', 'Ávila', '15234871', 1),
(7, 'William', 'Duran', '47806512', 1),
(8, 'Jaider', 'Miranda', '47582389', 0),
(9, 'Daniel', 'Vereau', '47862532', 0),
(10, 'Alex', 'Montoya', '42856510', 0),
(11, 'Lino', 'Flores', '42850365', 0),
(12, 'Alejandra', 'Abarca', '49856321', 1),
(13, 'Yoshi', 'Takeuchi', '45126355', 1),
(14, 'Jonathan', 'Ganoza', '45982012', 0),
(15, 'Daniel', 'Abarca', '14851204', 1),
(16, 'Almendra', 'Abarca', '53127854', 1),
(17, 'Luis', 'Cordova', '50125896', 0),
(18, 'David', 'Rojas', '45891201', 0),
(19, 'Kevin', 'Ávila', '48521369', 0),
(20, 'Violeta', 'Abarca', '27416589', 1),
(21, 'Marco', 'Cordova', '46851298', 1),
(22, 'Carlos', 'Ávalos', '26859103', 1);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id`);

--
-- 테이블의 인덱스 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 테이블의 인덱스 `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 테이블의 AUTO_INCREMENT `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
