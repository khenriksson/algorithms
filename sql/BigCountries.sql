/* Write your MySQL query statement below */
SELECT name, population, area
FROM World
WHERE area > 3000000 OR population > 25000000

/*
* Runtime: 275 ms, faster than 25.22% of MySQL online submissions for Big Countries.
* Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.
*/