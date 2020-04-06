select distinct on (d.donation_id) d.donation_id,d.donation_title,d.post_location,dp.donation_photo  from favorites f
join users u on u.user_id= f.user_id
join donations d on d.donation_id=f.donation_id
join donation_photos dp ON dp.donation_id = d.donation_id
where u.user_id=$1;