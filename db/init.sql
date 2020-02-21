CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(20),
password TEXT,
profile_pic text
)

CREATE TABLE posts(
post_id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
user_id INTEGER REFERENCES users(user_id)
)