// In the example below we create a new array that contains the people that their first_name has six or less characters.

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


const short = people.filter((person) => {
    return person.first_name.length <= 6;
});

// [ { first_name: 'LeBron', last_name: 'James' } ]
console.log(short);



//In the example below we have an array that contains the weekly days and we want to create a new array that will contain only the days that the number of their letters is less than 7.

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with only the days that the length of their characters is less than 7
const shortDays = days.filter(day => {
  return day.length < 7;
});

// [ 'Sunday', 'Monday', 'Friday' ]
console.log(shortDays);
