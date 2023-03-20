/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Corinne Mabey';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.getElementById('name').innerText = myName
document.querySelector(myName);

// Step 3: declare and instantiate a variable to hold the current year
// let year = Calendar.getInstance().get(Calendar.YEAR);
year = 2023

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerText = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
var picture = document.createElement("IMG")
picture.setAttribute("src", "/Users/corinnemabey/Downloads/week02/images/PrettyMe.jpeg")
picture.setAttribute("src", "/images/PrettyMe.jpeg")
// const PrettyMe = element.setAttribute('src', 'PrettyMe.jpeg')
document.querySelector('#mainImage').src = 'images/PrettyMe.jpeg'

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
// document.querySelector(picture).setAttribute()
// document.querySelector(".header").setAttribute("src", "/images.PrettyMe.jpeg")


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
MyFavFoods = ['arepa', ' ice cream'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerText = MyFavFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
FavFood1 = ' lentils';

// Step 4: add the variable holding another favorite food to the favorite food array
MyFavFoods.push(FavFood1);

// Step 5: repeat Step 2
document.querySelector('#food').innerText = MyFavFoods;

// Step 6: remove the first element in the favorite foods array
MyFavFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = MyFavFoods;

// Step 8: remove the last element in the favorite foods array
MyFavFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = MyFavFoods;


