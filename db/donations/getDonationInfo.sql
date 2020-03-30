SELECT d.donation_title,d.donation_desc,d.view_count,d.post_date,c.category_name 
FROM donations d
JOIN categories c 
ON c.category_id = d.category
WHERE d.donation_id =$1;