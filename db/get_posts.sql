SELECT * FROM posts
WHERE title LIKE $2 AND user_id = $1
