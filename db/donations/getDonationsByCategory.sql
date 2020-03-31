-- SELECT d.*,c.category_name,dp.donation_photo FROM donations d
-- JOIN categories c ON d.category = c.category_id
-- JOIN donation_photos dp ON dp.donation_id = d.donation_id
-- WHERE c.category_name =$1;


SELECT d.*,c.category_name FROM donations d
JOIN categories c ON d.category = c.category_id
WHERE c.category_name = $1;