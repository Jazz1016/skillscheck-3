-- INSERT INTO users (
--     username,
--     password
-- ) VALUES (
--     $1,
--     $2
-- )
INSERT INTO users (
    username,
    password,
    profile_pic
) VALUES (
    $1,
    $2,
    $3
)
RETURNING user_id, username;