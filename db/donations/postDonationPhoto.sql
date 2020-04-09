INSERT INTO donation_photos
(  donation_id, donation_photo )
VALUES
( $1, $2 )
RETURNING donation_id;