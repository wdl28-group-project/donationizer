DELETE FROM donation_photos
WHERE donation_id =$1;
DELETE FROM favorites
WHERE donation_id =$1;
DELETE FROM donations
WHERE donation_id=$1;