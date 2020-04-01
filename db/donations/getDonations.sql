SELECT distinct d.*, dp.donation_photo,c.category_name FROM  donations d
inner join donation_photos dp ON dp.donation_id = d.donation_id
order by d.post_date desc;
