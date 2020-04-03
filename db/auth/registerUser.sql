INSERT INTO users
( username, password, location, donation_count )
VALUES
( $1, $2, $3, 0 )

RETURNING *