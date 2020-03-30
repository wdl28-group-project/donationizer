-- SELECT d.*,c.category_name FROM donations d
-- JOIN categories c ON d.category = c.category_id
-- WHERE c.category_name = $1 and d.title ILIKE $2;

SELECT d.*,c.category_name FROM donations d
JOIN categories c ON d.category = c.category_id
WHERE d.title ILIKE $1;