/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string
let myself = {
    'name': "Corinne Mabey",
    'photo': "PrettyMe.jpeg",
    'favoriteFoods': ["arepa", "ice cream", "lentils"],
    'hobbies': ["reading", "music", "exercise"],
    'placesLived': [],
}

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myself.placesLived = [
    {
        place: 'Logan, Utah',
        length: '7'
    },
    {
        place: 'San Antonio, Texas',
        length: '10'
    },
    {
        place: 'Rexburg, Idaho',
        length: '5'
    }
]
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myself.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', `images/${myself.photo}`)

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', `This is ${myself.name}`);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myself.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food.toUpperCase();
    document.querySelector('#favorite-foods').appendChild(li);
})

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myself.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby.toUpperCase();
    document.querySelector('#hobbies').appendChild(li);
})

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

myself.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place.toUpperCase();
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = place.length.toUpperCase() + ' years';
    document.querySelector('#places-lived').appendChild(dd);
})

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
