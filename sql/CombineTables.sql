# Write your MySQL query statement below
SELECT Person.FirstName, Person.LastName, Address.City, Address.State
FROM Person
LEFT JOIN Address ON Address.PersonId=Person.PersonId

/**
* Runtime: 312 ms, faster than 55.10% of MySQL online submissions for Combine Two Tables.
* Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.
*/