// Function to randomize numbers
function randomizeNumbers() {
    const start = parseInt(document.getElementById("startNumber").value, 10);
    const end = parseInt(document.getElementById("endNumber").value, 10);

    if (isNaN(start) || isNaN(end) || start >= end) {
        alert("Please enter valid start and end numbers. Start should be less than end.");
        return;
    }

    // Generate an array of numbers within the range
    const numberArray = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    shuffleNumbers(numberArray);
}

// Function to show numbers in order
function showNumbersInOrder() {
    const start = parseInt(document.getElementById("startNumber").value, 10);
    const end = parseInt(document.getElementById("endNumber").value, 10);

    if (isNaN(start) || isNaN(end) || start >= end) {
        alert("Please enter valid start and end numbers. Start should be less than end.");
        return;
    }

    // Generate and display the numbers in order
    const numberArray = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    displayNumbers(numberArray);
}

// Function to shuffle and display numbers
function shuffleNumbers(numbers) {
    numbers.sort(() => Math.random() - 0.5); // Shuffle array
    displayNumbers(numbers);
}

// Function to display numbers
function displayNumbers(numbers) {
    document.getElementById("output").innerHTML = numbers.map(number =>
        `<div class="number-block">${number}</div>`
    ).join('');
}

// Function to clear everything
function clearAll() {
    document.getElementById("startNumber").value = "";
    document.getElementById("endNumber").value = "";
    document.getElementById("output").innerHTML = "";
}
