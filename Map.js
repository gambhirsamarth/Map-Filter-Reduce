/*In the example below we create a new array using map that contains the full name of each person.*/

const people = [{
    first_name: "Michael",
    last_name: "Jordan"
}, {
    first_name: "LeBron",
    last_name: "James"
}, {
    first_name: "Stephen",
    last_name: "Curry"
}];

const fullNames = people.map((person) => {
    return `${person.first_name} ${person.last_name}`;
});

// [ 'Michael Jordan', 'LeBron James', 'Stephen Curry' ]
console.log(fullNames);




/*In the example below we create a new array that contains the first two letters of each day.*/

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const newDays = days.map((day) => {
    return day.substring(0,2);
});

// [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ]
console.log(newDays);
