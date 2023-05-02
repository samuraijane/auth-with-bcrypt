CREATE DATABASE demo_bcrypt;
\c demo_bcrypt
CREATE TABLE students (
    id serial primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    createdAt timestamp not null
    updatedAt timestamp not null
);
INSERT INTO students (
  "id",
  "firstName",
  "lastName",
  "email",
  "password",
  "createdAt",
  "updatedAt"
) VALUES (
  1,
  'Anna',
  'Anderson',
  'anna@email.com',
  'pass1234',
  CURRENT_TIMESTAMP(3),
  CURRENT_TIMESTAMP(3)
);
