
/*1a. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let subtractAge = ages[ages.length - 1] - ages[0];
console.log("Result of subtraction:", subtractAge);


//1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(99);
console.log("Ages after pushing a new value:", ages);
let subtractAgePush = ages[ages.length - 1] - ages[0];
console.log("Result of subtraction after push:", subtractAgePush);
 

//1c.Use a loop to iterate through the array and calculate the average age.

let sumOfAges = 0;
    for(i = 0; i < ages.length; i++) {
    sumOfAges += ages[i]; 
    }
    let averageAges = sumOfAges / ages.length;
console.log("Sum of ages:", sumOfAges);
console.log("Average age:", averageAges);


/*2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalLetters = 0;
    for (i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
    }
    for (let i = 0; i < names.length; i++) {
    }
let AverageLettersPerName = totalLetters / names.length;
console.log("Average letters per name:", AverageLettersPerName);


//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = names.join(" ");
console.log("Concatenated names:", concatNames);


//3. How do you access the last element of any array?

console.log("Last array element:", ages[ages.length - 1]);


//4. How do you access the first element of any array?

console.log("First array element:", ages[0]);


/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.

For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/

let nameLengths = [];
    for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length) 
    }
console.log("Name lengths array", nameLengths);


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumOfArray = 0;
    for (let i = 0; i < nameLengths.length; i++) {
sumOfArray += nameLengths[i];
    }
console.log("Sum of array", sumOfArray);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function myFunction(word, n) {
    let myFunction = "";
    for (let i = 0; i < n; i++) 
        myFunction += word;
    return myFunction;
    }
console.log(myFunction("Squirrel", 7));


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("Her full name is:", createFullName('Jill', 'Shade'));



//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function arrayOfNumbers(numbers) {
   let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
        sum += numbers[i];
    if (sum > 100) {
    return true; 
    } else {
    return false;
    }
    }
let numbers = [7, 9, 11, 23, 27, 39];
console.log("Array of numbers", arrayOfNumbers(numbers));



//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function numbersArray(nums) {
    let average = 0;
    for (let i = 0; i < nums.length; i++) {
         average += nums[i];
    }
    average = average / numbers.length
    return average
    }
let nums = [7, 23, 666];
console.log("Numbers array", numbersArray(nums));


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
//first array is greater than the average of the elements in the second array.

function twoArrays(arr1, arr2) {

    let average1 = 0;
    let average2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        average1 += arr1[i];
        }
    for (let j = 0; j < arr2.length; j++) {
        average2 += arr2[j];
    }
    if (average1 > average2) {
        return true; 
    } else { 
        return false;
    }
    
    average1 = average1 / arr1.length
    return average1

    average2 = average2 / arr2.length
    return average2
    }
let arr1 = [2, 4, 6, 8]
let arr2 = [1, 3, 5, 7, 9]
console.log("Two arrays", twoArrays(arr1, arr2));


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(hotOutside, money) {
    
    return isHotOutside && moneyInPocket > 10.50; 
    } 

let isHotOutside = false;
let moneyInPocket = 327.00; 
let willBuy = willBuyDrink(isHotOutside, moneyInPocket);
console.log("Will she buy a drink?", willBuy);