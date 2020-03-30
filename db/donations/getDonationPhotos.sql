SELECT dp.donation_photo
FROM donation_photos dp
JOIN donations d
ON dp.donation_id = d.donation_id
WHERE d.donation_id = $1;