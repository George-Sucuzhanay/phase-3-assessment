-- SQL Query
-- Write a SQL statement to prepare a list with 
-- salesman name, customer name and their cities 
-- for the salesmen and customer who belongs to the same city.

SELECT salesmen.salesman_id, customer.cust_name, customer.city FROM salesman, customer WHERE salesman.city = customer.city;
