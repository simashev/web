
-- create
CREATE TABLE STUDENT (
  Id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO STUDENT VALUES (0001, 'Clark', 22, 'Varshava');
INSERT INTO STUDENT VALUES (0002, 'Dave', 45, 'Moscow');
INSERT INTO STUDENT VALUES (0003, 'Ava', 15, 'Voronezh');
INSERT INTO STUDENT VALUES (0004, 'Sasha', 18, 'Yaroslavl');
INSERT INTO STUDENT VALUES (0005, 'Anya', 32, 'Kazan');
INSERT INTO STUDENT VALUES (0006, 'David', 24, 'Moscow');
INSERT INTO STUDENT VALUES (0007, 'Andrey', 28, 'Tashkent');

-- fetch 
SELECT * FROM STUDENT WHERE age >=18;
