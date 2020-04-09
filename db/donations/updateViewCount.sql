UPDATE donations SET view_count = ((select view_count from donations where donation_id = $1)+1)
WHERE donation_id = $1;
select view_count from donations where donation_id = $1
RETURNING view_count;