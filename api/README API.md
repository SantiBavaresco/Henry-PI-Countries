# Individual Project - Henry Countries 
## by Santiago Bavaresco
GitHub of the project : https://github.com/SantiBavaresco/Henry-PI-Countries

Linkedin : https://www.linkedin.com/in/santiago-bavaresco/
# 

> __Routes Table Guide__

|               | Routes | Description    |
| :---:   | :---: | :---: |
| Creates new country | http://localhost:3001/api/countries/NewCountry |Creates a new country in the DB, it needs to be send an objetc with {ID, name, flag, capital, continent, subregion, area, population, timezone, maps} |
| Creates all countrys from API | http://localhost:3001/api/countries/BringCountriesFromApi | Creates in the DB all the country's that the external API brings. ('https://restcountries.com/v3.1/all') |
|Show all the countrys in the DB | http://localhost:3001/api/countries/ | Show al the countries in the DB |
|Find country by ID + Activities | http://localhost:3001/api/countries/id/arg | Brings all the data from the DB for the ID country that we whant to find (ej: arg) |
| Find country by name string | http://localhost:3001/api/countries/s?name=island | Brings all the data from the DB that match with the name string we put as query and we whant to find (ej: island will bring al the countrys with have in his name the string "island") |
| Creates a new activity | http://localhost:3001/api/activities/CreateActivity | Creates a new activity in the DB, it needs to be send an objetc with { name, difficulty, duration, arrayCountries }, if we send arrayCountries: ["Random"] it wil generate a random array of countrys between 100-125 to add the new activity ( to save the laborious task of data entry). |
| Show all the activities in the DB | http://localhost:3001/api/activities/ | Show al the activities in the DB |
| Find activities by country ID | http://localhost:3001/api/activities/ita | Brings an array of the activities from the DB for the ID country that we whant to find his activity (ej: ita) |
| Assing activities to contries | http://localhost:3001/api/activities/AddExistingActivitiesToCountries | It will recibe an array of existing activities in the DB, and an array of existing countries to assing those countries with the activities. Ej: { ""arrayActivities"": [1,7,3], ""arrayCountries"": [""ARG"",""MEX""] }.  Returns and object with the countris that already have that activity assing. |
