let array = ['one', 'two', 'three']

let new_array = array.map(function (item){
    // return element for new_array
    return `<li>${item}</li>`;
});

// document.getElementById("myList").innerHTML = new_array.join;

let grades = ['A', 'B', 'A']
switch (grades) {
    case 'A':
        console.log(4);
        break;
    case 'B':
        console.log(3);
        break;
    case 'C':
        console.log(2);
        break;
    case 'D':
        console.log(1);
        break;
    default:
        console.log(0);
}

// How do I pass each grade to this function?
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

const initialValue = 0;
const sumGPA = gpaPoints.reduce((accumulator, currentValue) => accumulator = currentValue, initialValue
);

console.log(sumGPA);

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

let numbers = [12, 34, 21, 54]


