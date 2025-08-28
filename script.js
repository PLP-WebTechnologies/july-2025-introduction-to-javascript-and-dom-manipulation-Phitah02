// Wait for DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {

// Part 1: Mastering JavaScript Basics

const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number.';
        result.style.color = 'red';
    } else {
        result.style.color = 'black';
        if (number % 2 === 0) {
            result.textContent = `${number} is even.`;
        } else {
            result.textContent = `${number} is odd.`;
        }
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
        sumResult.style.color = 'red';
    } else {
        sumResult.style.color = 'black';
        sumResult.textContent = `The sum is: ${calculateSum(num1, num2)}`;
    }
});

// Display greeting on the page instead of just console
const greetingDisplay = document.createElement('p');
greetingDisplay.textContent = formatGreeting('Visitor');
greetingDisplay.style.marginTop = '10px';
document.getElementById('part2').appendChild(greetingDisplay);

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

// Add while loop example with countdown
let count = 3;
const countdownElement = document.createElement('p');
countdownElement.textContent = `Countdown: ${count}`;
document.getElementById('part3').appendChild(countdownElement);

const countdownButton = document.createElement('button');
countdownButton.textContent = 'Start Countdown';
document.getElementById('part3').appendChild(countdownButton);

countdownButton.addEventListener('click', () => {
    let currentCount = count;
    countdownElement.textContent = `Countdown: ${currentCount}`;
    
    const countdownInterval = setInterval(() => {
        currentCount--;
        countdownElement.textContent = `Countdown: ${currentCount}`;
        
        if (currentCount <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Blast off! 🚀';
        }
    }, 1000);
});

// Part 4: Mastering the DOM with JavaScript

const toggleButton = document.getElementById('toggleButton');
const toggleContent = document.getElementById('toggleContent');
const generateColorListButton = document.getElementById('generateColorListButton');
const colorList = document.getElementById('colorList');

toggleButton.addEventListener('click', () => {
    toggleContent.classList.toggle('hidden');
});

// Color List Generation
generateColorListButton.addEventListener('click', () => {
    colorList.innerHTML = ''; // Clear existing list
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'];
    
    colors.forEach(color => {
        const listItem = document.createElement('li');
        listItem.textContent = color;
        listItem.style.color = color.toLowerCase();
        colorList.appendChild(listItem);
    });
});

// DOM Interaction 2: Change text content with mouseover/mouseout
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', (event) => {
    event.target.dataset.originalText = event.target.textContent;
    event.target.textContent = 'You are mastering JavaScript!';
});

h1.addEventListener('mouseout', (event) => {
    event.target.textContent = event.target.dataset.originalText;
});

// DOM Interaction 3: Create an element on the fly
const newButton = document.createElement('button');
newButton.textContent = 'Click me for a surprise!';
document.getElementById('part4').appendChild(newButton);

newButton.addEventListener('click', () => {
    alert('You are doing great!');
});

}); // End of DOMContentLoaded
