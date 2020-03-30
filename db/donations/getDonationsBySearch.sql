SELECT d.*,c.category_name FROM donations d
JOIN categories c ON d.category = c.category_id
WHERE d.donation_title ILIKE $1;


-- if we want to filter both category and search input

-- SELECT d.*,c.category_name FROM donations d
-- JOIN categories c ON d.category = c.category_id
-- WHERE c.category_name = $1 and d.title ILIKE $2;