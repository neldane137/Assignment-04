/*eslint-env browser */

//STEP 1
/*
var movies = ["Star Wars", "Monsters", "Happy Feet", "Ice Age", "War Games"];
window.console.log(movies[1]);
*/


//STEP 2: CONSTRUCTOR
/*
var movies = new Array(5);
var movies = new Array("Star Wars", "Monsters","Happy Feet", "Ice Age","War Games");
window.console.log(movies[0]);
*/


//STEP 3
/*
var movies = new Array("Star Wars", "Monsters","Happy Feet", "Ice Age","War Games");
movies[5] = new Array("RP1");
window.console.log(movies.length);
*/


//STEP 4  (DELETE FIRST ITEM)
/*
var movies = ["Star Wars", "Monsters", "Happy Feet", "Ice Age", "War Games"];
var lessmovies = movies.shift();
window.console.log(movies); // display content of the original array minus first
window.console.log(lessmovies); // display deleted content of the array 
*/


//STEP 5 (FOR LOOP ITERATION)
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i] + "\n");
}
*/


//STEP 6 (FOR-IN LOOP)
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var element;
for (element in movies) {
    window.console.log(movies[element]);
}
*/


//STEP 7 (FOR-IN LOOP SORTED)
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var moviesSort = movies.sort();
var element;
for (element in moviesSort) {
    window.console.log(moviesSort[element]);
}
*/


//STEP 8 (LIST TWO ARRAYS)
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var leastFavMovies = [];
leastFavMovies[0] = "Bad Movie 1";
leastFavMovies[1] = "Bad Movie 2";
leastFavMovies[2] = "3 Bad Movies";
var i;
window.console.log("Movies I like:" + "\n" + "\n");
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i] + "\n");
}
window.console.log("\n" + "\n");
var i;
window.console.log("Movies I regret watching:" + "\n" + "\n");
for (i = 0; i < leastFavMovies.length; i += 1) {
    window.console.log(leastFavMovies[i] + "\n");
}
*/


//STEP 9 (CONCAT / REVERSE SORTED) 
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var leastFavMovies = [];
leastFavMovies[0] = "Bad Movie 1";
leastFavMovies[1] = "Bad Movie 2";
leastFavMovies[2] = "3 Bad Movies";
var movies = movies.concat(leastFavMovies);
var moviesReverse = movies.reverse();
var element;
for (element in moviesReverse) {
    window.console.log(moviesReverse[element]);
}
*/

//STEP 10  (POP - last item)
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var leastFavMovies = [];
leastFavMovies[0] = "Bad Movie 1";
leastFavMovies[1] = "Bad Movie 2";
leastFavMovies[2] = "3 Bad Movies";
var movies = movies.concat(leastFavMovies);
var moviesReverse = movies.reverse();
window.console.log(moviesReverse.pop());
*/


//STEP 11 (SHIFT - First item)
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var leastFavMovies = [];
leastFavMovies[0] = "Bad Movie 1";
leastFavMovies[1] = "Bad Movie 2";
leastFavMovies[2] = "3 Bad Movies";
var movies = movies.concat(leastFavMovies);
var moviesReverse = movies.reverse();
window.console.log(moviesReverse.shift());
*/

//STEP 12  
/*
var movies = [];
movies[0] = "Star Wars";
movies[1] = "Monsters";
movies[2] = "Happy Feet";
movies[3] = "Ice Age";
movies[4] = "War Games";
movies[5] = "ET";
movies[6] = "Tron";
var leastFavMovies = [];
leastFavMovies[0] = "Bad Movie 1";
leastFavMovies[1] = "Bad Movie 2";
leastFavMovies[2] = "3 Bad Movies";
var movies = movies.concat(leastFavMovies);

var badMovie1 = movies.indexOf("Bad Movie 1");
var badMovie2 = movies.indexOf("Bad Movie 2");
var badMovie3 = movies.indexOf("3 Bad Movies");
window.console.log(badMovie1);
window.console.log(badMovie2);
window.console.log(badMovie3);
movies[7] = "New1";
movies[8] = "New2";
movies[9] = "New3";
var element;
for (element in movies) {
    window.console.log(movies[element]);
}
*/


//STEP 13
/*
var employee1 = [];
employee1[0] = 4235;
employee1[1] = "Zak Ruvalcaba";
employee1[2] = "Web Developer";
employee1[3] = "Engineering";
employee1[4] = true;

var employee2 = [];
employee2[0] = 4567;
employee2[1] = "Jane Smith";
employee2[2] = "IT Help Desk";
employee2[3] = "IT";
employee2[4] = true;
var employees = employee1.concat(employee2);
window.console.log(employees);
window.console.log(employees[6]);
*/

//STEP 14  
/*
var employee1 = [[4235, "Zak Ruvalcaba", "Web Developer", "Engineering", true]];
var employee2 = [[4567, "Jane Smith", "IT Help Desk", "IT", true]];
var employees = employee1.concat(employee2);
window.console.log(employees);
function listEmployee() {
    "use strict";
    var i, j, employeeNames;
    for (i = 0; i < employees.length; i += 1) {
        for (j = 0; j < employees[1].length; j += 1) {
            employeeNames = employees[i][1];
            window.console.log(employeeNames);
        }
    }
}
listEmployee();
*/

//employee.forEach(function(element) {
//    "use strict";
//    window.console.log(employee);
//});



//STEP 15  

/*
function listEmployee() {
    "use strict";
    var i, employee1, employee2, employee3, employeesAll, currentEmployees;
    employee1 = [[4235, "Zak Ruvalcaba", "Web Developer", "Engineering", "true"]];
    employee2 = [[4567, "Jane Smith", "IT Help Desk", "IT", "true"]];
    employee3 = [[4789, "Fred Brown", "HR Asst", "HR", "false"]];
    employeesAll = employee1.concat(employee2, employee3);
    window.console.log(employeesAll);
    currentEmployees = [];
    for (i = 0; i < employeesAll.length; i += 1) {
 //       for (j = 0; j < employeesAll[i].length; j += 1) {
 //           currentEmployees = employeesAll[i][4] === "true";
        if (employeesAll[i][4] === "true") {
            window.console.log(currentEmployees[i]);
        }
    }
}
listEmployee();
*/






//STEP 16

/*

function listMovies() {
    "use strict";
    var i, j, movies, movieNames;
    movies = [
        ["Star Wars", 1],
        ["Happy Feet", 2],
        ["ET", 3],
        ["Ice Age", 4],
        ["Monster", 7]
    ];
    movieNames = movies.filter(function (movie) {
        for (i = 0; i < movies.length; i += 1) {
            for (j = 0; j < movies[i].length; j += 1) {
                if (typeof movie[i][j] === "string") {
                    window.console.log(movieNames);
                }
            }
        }
    });
*/
            


//STEP 17 
/*
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
window.console.log("Employees:" + "\n" + "\n");

function showEmployee() {
    "use strict";
    var i;
    for (i = 0; i < employees.length; i += 1) {
        window.console.log(employees[i] + "\n");
    }
}
showEmployee();

*/


//STEP 18
/*
var data = [58, "abcd", true, null, false, 0];
window.console.log(data);
var filterData = data.filter(function (isNaN) {
    "use strict";
    window.console.log(filterData);
});
*/



//STEP 19
/*
function randomItem() {
    "use strict";
    var number, item;
    number = [0, 10, 2, 103, 4, 65, 64, 7, 8, 9];
    item = number[Math.floor(Math.random() * number.length)];
    window.console.log(item);
}
randomItem();

*/

//STEP 20
/*
function maxItem() {
    "use strict";
    var number, maxNumber;
    number = [0, 10, 2, 103, 4, 65, 64, 7, 8, 9];
    maxNumber = Math.max(number);
    window.console.log(maxNumber);
}
maxItem();
*/