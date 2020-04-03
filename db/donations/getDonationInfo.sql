SELECT d.donation_title,d.donation_desc,d.view_count,d.post_date,c.category_name, d.donation_id 
FROM donations d
JOIN categories c 
ON c.category_id = d.category
WHERE d.donation_id = $1;



-- SELECT d.donation_title,d.donation_desc,d.view_count,d.post_date,c.category_name,dp.donation_photo 
-- FROM donations d JOIN categories c 
-- ON c.category_id = d.category
-- JOIN donation_photos dp ON dp.donation_id = d.donation_id
-- WHERE d.donation_id =2;