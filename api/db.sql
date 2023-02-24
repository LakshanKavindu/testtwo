create database pharamacy_db;
use pharamacy_db;

create table medicine(
    id int primary key auto_increment,
    drug_name varchar(50) not null,
    manufacturer varchar(50) not null,
    supplier varchar(50) not null,
    NDC varchar(50) not null,
    Expiration_date date not null,
    Quantity int not null,
    Unit_price int not null,
    is_deleted int not null defualt 0,
);


insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Paracetamol','Pfizer','Pfizer','123456789','2021-12-31',100,10);
insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Aspirin','Pfizer','Pfizer','123456789','2021-12-31',100,10);
insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Ibuprofen','Pfizer','Pfizer','123456789','2021-12-31',100,10);
insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Cetirizine','Pfizer','Pfizer','123456789','2021-12-31',100,10);
insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Diphenhydramine','Pfizer','Pfizer','123456789','2021-12-31',100,10);
insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Loratadine','Pfizer','Pfizer','123456789','2021-12-31',100,10);
insert into medicine(drug_name,manufacturer,supplier,NDC,Expiration_date,Quantity,Unit_price) values('Omeprazole','Pfizer','Pfizer','123456789','2021-12-31',100,10);

create table pharmacy(
    id int primary key auto_increment,
    pharmacy_name varchar(50) not null,
    address varchar(50) not null,
    phone_number varchar(50) not null,
    email varchar(50) not null,
    website varchar(50) not null,
    operating_hours varchar(50) not null,
    pharmacy_liscene varchar(50) not null,
    password varchar(50) not null,
    confirm_password varchar(50) not null,
    is_deleted int not null defualt 0,
);

insert into pharmacy(pharmacy_name,address,phone_number,email,website,operating_hours,pharmacy_liscene,password,confirm_password) values('Pharmacy1','address1','123456789','a@gmail.com','www.pharmacy1.com','9am-5pm','123456789','123456789','123456789');
insert into pharmacy(pharmacy_name,address,phone_number,email,website,operating_hours,pharmacy_liscene,password,confirm_password) values('Pharmacy2','address2','123456789','asd@gmail.com','www.pharmacy2.com','9am-5pm','123456789','123456789','123456789');
insert into pharmacy(pharmacy_name,address,phone_number,email,website,operating_hours,pharmacy_liscene,password,confirm_password) values('Pharmacy3','address3','123456789','asdf@gmail.com','www.pharmacy3.com','9am-5pm','123456789','123456789','123456789');
