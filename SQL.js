// //SQL BOLT uygulamaları

// Exercise 1
// 1-	SELECT title
// FROM movies;
// 2-	SELECT director
// FROM movies;
// 3-	SELECT Title, Director
// FROM movies;
// 4-	SELECT Title, Year
// FROM movies;
// 5-	SELECT *
// FROM movies;

// Exercise 2
// 1-	SELECT title
// FROM movies
// WHERE Id=6;

// 2-	SELECT * 
// FROM movies
// WHERE Year BETWEEN 2000 AND 2010;

// 3-	SELECT * 
// FROM movies
// WHERE Year NOT BETWEEN 2000 AND 2010;

// 4-	SELECT * 
// FROM movies
// WHERE Id<6;

// Exercise 3

// 1-	SELECT * 
// FROM movies
// WHERE Title LIKE "Toy Story%";

// 2-	SELECT * 
// FROM movies
// WHERE Director LIKE "John Lasseter";
// 3-	SELECT * 
// FROM movies
// WHERE Director != "John Lasseter";
// 4-	SELECT * 
// FROM movies
// WHERE Title LIKE "WALL%";

// Exercise 4

// 1-		SELECT DISTINCT Director 
// FROM movies
// ORDER BY Director;

// 2-	SELECT *
// FROM movies
// ORDER BY Year DESC
// LIMIT 4;
// 3-	SELECT * 
// FROM movies
// ORDER BY Title ASC
// LIMIT 5;
// 4-	SELECT * 
// FROM movies
// ORDER BY Title ASC
// LIMIT 5
// OFFSET 5;
// Exercise 5
// 1-	SELECT * 
// FROM north_american_cities
// WHERE Country = 'Canada';
// 2-	SELECT * 
// FROM north_american_cities
// WHERE Country ='United States'
// ORDER BY Latitude DESC;
// SELECT * 
// 3-	FROM north_american_cities
// WHERE longitude < (
// 	SELECT longitude
// 	FROM north_american_cities
// 	WHERE city = "Chicago"
// )

// 4-	SELECT * 
// FROM north_american_cities
// WHERE Country = 'Mexico'
// ORDER BY Population DESC
// LIMIT 2;
// 5-	SELECT * 
// FROM north_american_cities
// WHERE Country = 'United States'
// ORDER BY Population DESC
// LIMIT 2
// OFFSET 2;
