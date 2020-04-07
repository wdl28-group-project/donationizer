SELECT distinct on(d.donation_id) d.*, dp.donation_photo,c.category_name FROM  donations d
INNER JOIN donation_photos dp ON dp.donation_id = d.donation_id
JOIN categories c ON d.category = c.category_id
WHERE d.donator_id = $1
order by d.donation_id desc;