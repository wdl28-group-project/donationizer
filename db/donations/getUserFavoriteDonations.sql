-- select distinct on (d.donation_id) d.donation_id,d.donation_title,d.post_location,dp.donation_photo  from favorites f
-- join users u on u.user_id= f.user_id
-- join donations d on d.donation_id=f.donation_id
-- join donation_photos dp ON dp.donation_id = d.donation_id
-- where u.user_id=$1;

SELECT distinct on(d.donation_id) d.*, dp.donation_photo, c.category_name
FROM donations d
JOIN favorites f
ON f.donation_id = d.donation_id
JOIN donation_photos dp
ON d.donation_id = dp.donation_id
JOIN categories c
ON d.category = c.category_id
WHERE f.user_id =$1;