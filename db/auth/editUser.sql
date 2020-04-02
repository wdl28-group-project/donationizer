UPDATE users

SET username = $1, 
    profile_pic = $2,
    location = $3

WHERE
  user_id = $4

RETURNING
    username,
    profile_pic,
    location;