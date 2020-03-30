SELECT d.*,c.category_name FROM donations d
JOIN categories c ON d.category = c.category_id
WHERE c.category_name =$1;