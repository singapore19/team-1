DROP SCHEMA IF EXISTS rough_sleepers;
CREATE SCHEMA rough_sleepers ;
USE rough_sleepers;

create table sleepers (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `lon` float NOT NULL, 
    `lat` float NOT NULL,
    `gender` char(1),
    `race` char,
    `age` int,
    `belongings` text,
    `appearance` text,
    `desc` text,
    PRIMARY KEY (`id`)
)
