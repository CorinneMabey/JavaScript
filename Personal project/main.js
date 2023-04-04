// Step 1: Declare a global empty array variable to store a list of temples

let holidays = [];
choices = [131, 132, 137, 140, 145, 148, 152, 173, 177, 194]
filteredList = []

// Step 2: Declare a function named output that accepts a list of temples as an array argument

function output(array) {
    array.forEach(element => {
        var event = document.createElement("paragraph");
        event.textContent = element.name;
        // Add the event to the calendar
        // - extract the date
        date = event.date.day
        // - find the date in the css
         
        // - extract essential information from the element in the api 
        // - append info to the <li> with the date
    });
}


function filter(array) {
    array.forEach(element => {
        if (date == choice) {
            filteredList.append(element);
        }
    });
}

async function getHolidays() {
    const response = await fetch('https://calendarific.com/api/v2/holidays?api_key=da25824db34555196909e933f6146f47f9f38fec&country=US&year=2023&month=4');
    let data = await response.json();
    holidays = data;
    console.log(holidays);
    output(holidays);
}

getHolidays(holidays);


function highlightToday() {
    let today = date.object.getDate()
    return today;
}

// "meta": {
//     "code": 200
// },
// "response": {
//     "holidays": [
//         {
//             "name": "Name of holiday goes here",
//             "description": "Description of holiday goes here",
//             "date": {
//                 "iso": "2018-12-31",
//                 "datetime": {
//                     "year": 2018,
//                     "month": 12,
//                     "day": 31
//                 }
//             },
//             "type": [
//                 "Type of Observance goes here"
//             ]
//         }
//     ]
// }
// }
