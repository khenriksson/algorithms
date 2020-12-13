/* Write your MySQL query statement below */
SELECT Customers.Name as "Customers"
FROM Customers
WHERE Id NOT IN
    (SELECT CustomerId 
     FROM Orders)

/*
* Runtime: 487 ms, faster than 31.08% of MySQL online submissions for Customers Who Never Order.
* Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customers Who Never Order.
*/