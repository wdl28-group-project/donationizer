SELECT d.*, dp.donation_photo, c.category_name
FROM donations d
JOIN favorites f
ON f.donation_id = d.donation_id
JOIN donation_photos dp
ON d.donation_id = dp.donation_id
JOIN categories c
ON d.category = c.category_id
WHERE f.user_id = $1