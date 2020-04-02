SELECT distinct on (d.donation_id) d.post_date,d.*, dp.donation_photo FROM  donations d
inner join donation_photos dp ON dp.donation_id = d.donation_id
order by d.donation_id desc;
