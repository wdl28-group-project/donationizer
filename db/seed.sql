USERS
===================================================
CREATE TABLE users(
user_id SERIAL PRIMARY KEY ,
username VARCHAR(30) UNIQUE NOT NULL,
password TEXT NOT NULL,
profile_pic TEXT,
location VARCHAR(100) NOT NULL,
donation_count INTEGER
);

INSERT INTO users
(username,password,profile_pic,location,donation_count)
VALUES
('aaa','asd','https://robohash.org/aaa','Dallas,TX',0),
('bbb','asd','https://robohash.org/bbb','Dallas,TX',0),
('ccc','asd','https://robohash.org/ccc','Dallas,TX',0);


DONATIONS
===================================================
CREATE TABLE donations(
donation_id SERIAL PRIMARY KEY,
donator_id INTEGER references users(user_id),
donation_title VARCHAR(100) NOT NULL,
donation_desc VARCHAR(500),
post_date timestamp NOT NULL,
post_location VARCHAR(100) NOT NULL,
view_count INTEGER,
isDonated boolean,
category INT references categories(category_id)
);


INSERT INTO donations
(donator_id,donation_title,donation_desc,post_date,post_location,view_count,isDonated,category)
VALUES(1,'hat','like new',now(),'Dallas,TX',0,false,1),
(2,'bag','like new',now(),'Dallas,TX',0,false,2),
(3,'keyboard','like new',now(),'Dallas,TX',0,false,3);


FAVORITES
======================================
CREATE TABLE favorites(
favorite_id SERIAL PRIMARY KEY,
donation_id INTEGER references donations(donation_id),
user_id INTEGER references users(user_id)
);

INSERT INTO favorites
(donation_id,user_id)
VALUES(1,3),
(3,1);


DONATED PRODUCTS
=========================================
CREATE TABLE donated_products(
donated_product_id SERIAL PRIMARY KEY,
taker_id INTEGER references users(user_id),
donation_id INTEGER references donations(donation_id)
);


DONATION PHOTOS
==============================
create table donation_photos
(donation_photo_id SERIAL PRIMARY KEY,
donation_photo text,
donation_id int references donations(donation_id)
);

insert into donation_photos
(donation_photo,donation_id)
values ('https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',1),
('https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',1),
('https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',1);


CATEGORIES
=========================
CREATE TABLE categories(
category_id SERIAL PRIMARY KEY,
category_name varchar(100)
);

INSERT INTO categories
(category_name)
values('Housing'),
('Clothing'),
('Electronics'),
('Home'),
('Education'),
('Sports'),
('Movies'),
('Baby'),
('Other');
