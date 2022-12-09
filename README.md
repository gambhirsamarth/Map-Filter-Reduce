<h1>Understanding map(), filter() and reduce() in JavaScript</h1>

<h2>What Is Map?</h2>


`map()` method creates a new array with the results of calling a provided function on every element in the calling array.

Let's say that we want to create a new array that contains the double values of the numbers array.
A way to do it is to create the function double and call it for every element in the forEach.

> Map written with a forEach
<pre>const numbers = [1, 2, 3];
const result = [];

const double = (number) => {
    return number * 2;
};

// Iterate over an array
numbers.forEach((number) => {
  result.push(double(number)); 
})

// [2 4 6]
console.log(result);
</pre>

And this is where map comes into play! Instead of calling the function manually, we can pass the function to map and javascript will call the function on every element for us!

> Map written without a forEach
<pre>const numbers = [1, 2, 3];

const double = (number) => {
  return number * 2;
};

const result = numbers.map(double);

//[2,4,6]
console.log(result);</pre>

<h2>When should you use a map?</h2>
<p>1. When you want to create a new array of the same length as the original array.</p>
<p>2. When you want to transform an array of one thing into an array of another thing.</p>

<br>

<h2>What Is Filter?</h2>

`filter()` method creates a new array with all elements that pass the test implemented by the provided function.

<ul>
<li>The call to filter() will return a new array.</li>
<li>The callback function used with filter should either return true or false.</li>
    <ul>
<li>true if the current element should appear in the new array.</li>
<li>false if the current element should NOT appear in the new array.</li>
    </ul>
</ul>

<p>Let's say that we want to create a new array that contains the even numbers of the numbers array.</p>

>Filter written with a forEach
<pre>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

const isEven = (number) => {
    return number % 2 === 0;
  };

// 2. Iterate over an array
numbers.forEach((number) => {
  if (isEven(number)) {
    evenNumbers.push(number);
  }
});

// [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers);
</pre>

>Filter written without a forEach

<pre>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (number) => {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);

// [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers);
</pre>

<h2>When to use Filter?</h2>
<p>1. When you want a new array of a different length, based on some condition that only some elements in the array satisfy.</p>

<br>

<h2>What Is Reduce?</h2>

`reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The accumulator can be anything (integer, string, object, etc.) and must be instantiated or passed when calling reduce().

<ul>
<li>The call to reduce() will return a single value.</li>
<li>The callback function used with reduce will get passed the accumulator value and an element in the array.</li>
<ul>
<li>The accumulator value is the value returned from the last call to the callback function.</li>
<li>The callback function should always return a value to be used in the next callback.</li>
</ul>
<li>The third argument to the reduce() function is the starting value for the accumulator.</li>
</ul>

Let's say that we want to calculate the sum of the numbers array.

>Reduce written with a forEach

<pre>
const numbers = [1,2,3,4,5,6];
let sum = 0;

// Iterate over the array
numbers.forEach((number) => {
    sum +=  number;
});

// 21
console.log(sum);
</pre>

>Reduce written without a forEach

<pre>
const numbers = [1,2,3,4,5,6];

// Iterate over the array
const sum = numbers.reduce((sum, number) => {
    sum += number;
    return sum; // Return the accumulator
}, 0);  // Initialize accumulator variable

// 21
console.log(sum);
</pre>
