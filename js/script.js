// Part 1: Mastering JavaScript Basics

const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number.';
    } else if (number % 2 === 0) {
        result.textContent = `${number} is even.`;
    } else {
        result.textContent = `${number} is odd.`;
    }
});

// Part 2: JavaScript Functions — The Heart of Reusability

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateSumButton = document.getElementById('calculateSumButton');
const sumResult = document.getElementById('sumResult');

function calculateSum(a, b) {
    return a + b;
}

function formatGreeting(name) {
    return `Hello, ${name}! Welcome to our page.`;
}

calculateSumButton.addEventListener('click', () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        sumResult.textContent = 'Please enter valid numbers.';
    } else {
        sumResult.textContent = `The sum is: ${calculateSum(num1, num2)}`;
    }
});

console.log(formatGreeting('Peter'));

// Part 3: JavaScript Loops — Embrace the Power of Repetition!

const generateListButton = document.getElementById('generateListButton');
const dynamicList = document.getElementById('dynamicList');

generateListButton.addEventListener('click', () => {
    dynamicList.innerHTML = ''; // Clear existing list
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${i}`;
        dynamicList.appendChild(listItem);
    }
});

const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(fruit => {
    console.log(`I love to eat ${fruit}s.`);
});

// Part 4: Mastering the DOM with JavaScript

const toggleButton = document.getElementById('toggleButton');
const toggleContent = document.getElementById('toggleContent');

toggleButton.addEventListener('click', () => {
    toggleContent.classList.toggle('hidden');
});

// DOM Interaction 2: Change text content
document.querySelector('h1').addEventListener('mouseover', (event) => {
    event.target.textContent = 'You are mastering JavaScript!';
});

// DOM Interaction 3: Create an element on the fly
const newButton = document.createElement('button');
newButton.textContent = 'Click me for a surprise!';
document.getElementById('part4').appendChild(newButton);

newButton.addEventListener('click', () => {
    alert('You are doing great!');
});

// Add a 'hidden' class to the CSS for the toggle functionality
const style = document.createElement('style');
style.innerHTML = `
.hidden {
    display: none;
}
`;
document.head.appendChild(style);
