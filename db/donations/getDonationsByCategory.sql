SELECT distinct d.*, dp.donation_photo,c.category_name FROM  donations d
INNER JOIN donation_photos dp ON dp.donation_id = d.donation_id
JOIN categories c ON d.category = c.category_id
WHERE c.category_name = $1
order by d.post_date desc;


