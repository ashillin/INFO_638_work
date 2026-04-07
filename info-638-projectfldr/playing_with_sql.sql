drop database if exists my_first_db;

create database my_first_db;

\c my_first_db

create table authors (
 id serial primary key,
 first_name text,
 last_name text
);

insert into authors (first_name, last_name) values ('william', 'shakespeare');
insert into authors (first_name, last_name) values ('jane', 'austen');
insert into authors (first_name, last_name) values ('leo', 'tolstoy');
insert into authors (first_name, last_name) values ('virginia', 'woolf');
insert into authors (first_name, last_name) values ('James', 'S. A. Corey');
insert into authors (first_name, last_name) values ('Craig', 'Alanson');
insert into authors (first_name, last_name) values ('Cixin', 'Liu');
insert into authors (first_name, last_name) values ('John', 'Scalzi');

create table books (
    id serial primary key,
    title varchar,
    publishing_year integer
);

insert into books (title, publushing_year) values ('A Song of Fire and Ice', '1996');
insert into books (title, publushing_year) values ('Convergence', '2019');
insert into books (title, publushing_year) values ('Bleed the Block', '2026'); 
insert into books (title, publushing_year) values ('Unionizing', '2024');
insert into books (title, publushing_year) values ('Leviathan Wakes', '2011'); 
insert into books (title, publushing_year) values ('Caliban’s War', '2012');

create table genres (
    id serial primary key,
    name varchar
);

insert into genres (genre_name) values ('Fantasy');
insert into genres (genre_name) values ('Science Fiction');
insert into genres (genre_name) values ('Non-Fiction'); 
insert into genres (genre_name) values ('Fiction');
insert into genres (genre_name) values ('Historical'); 
insert into genres (genre_name) values ('Historical Fiction');
