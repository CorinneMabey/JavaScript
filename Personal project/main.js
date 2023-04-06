// Step 1: Declare a global empty array variable to store a list of temples

let holidays = [];
choices = [131, 132, 140, 145, 148, 152, 173, 177, 194]
filteredList = []

// Step 2: Declare a function named output that accepts a list of temples as an array argument


// For each element - name, date, and description - I create an element in the html and aded the information into the text content of that element.
function output(apiResults) {
    apiResults.forEach(apiElement => {
        event.textContent = apiElement.name;
        // - extract the date
        date = apiElement.date.datetime.day;
        // - find the date in the html
        
        // - extract essential information from the element in the api 
        nameEvent = apiElement.name;
        // - append info to the <li> with the date
    });
}


function populateCalendar(holiday) {
    choices.forEach(choice => {
        choice = choice.toSring();
        document.getElementById(choice).createElement("p");
    });
    // Add the event to the calendar
    // let event = textContent

}

function filter(array) {
    choices.forEach(choice => {
        element = array[choice];
        filteredList.append(element);
        console.log(element);
        console.log(filteredList);
    });
}

async function getHolidays() {
    const response = await fetch('https://calendarific.com/api/v2/holidays?api_key=da25824db34555196909e933f6146f47f9f38fec&country=US&year=2023'); //&month=4
    let data = await response.json(); 
    holidays = data;
    console.log(holidays);
    // console.log(data);
    filter(holidays);
    output(holidays);
}



getHolidays(holidays);


function highlightToday() {
    let today = date.object.getDate()
    return today;
}
