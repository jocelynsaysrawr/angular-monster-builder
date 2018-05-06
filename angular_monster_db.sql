DROP DATABASE IF EXISTS angular_monster;
DROP USER IF EXISTS angular_monster;
CREATE USER angular_monster WITH ENCRYPTED PASSWORD 'hulkSmash';
CREATE DATABASE angular_monster OWNER angular_monster;
\c angular_monster;
SET ROLE angular_monster;