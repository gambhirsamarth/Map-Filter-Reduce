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
