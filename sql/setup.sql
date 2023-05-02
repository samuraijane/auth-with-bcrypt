CREATE DATABASE demo_bcrypt;
\c demo_bcrypt
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
INSERT INTO students (
  id,
  first_name,
  last_name,
  email,
  password,
  created_at,
  updated_at
) VALUES (
  1,
  'Anna',
  'Anderson',
  'anna@email.com',
  'pass1234',
  NOW(),
  NOW()
);
