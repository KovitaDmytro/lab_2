// const userAgent = navigator.userAgent;
// document.write("Your browser: " + userAgent);

function calculate() {
    // Get values from input fields
    let a = parseFloat(document.getElementById('num1').value); // First number
    let b = parseFloat(document.getElementById('num2').value); // Second number

    // Arithmetic operations
    let sum = a + b; // Addition
    let difference = a - b; // Subtraction
    let multiplication = a * b; // Multiplication
    let division = a / b; // Division

    // Comparison operators
    let isEqual = a == b; // Are equal
    let isNotEqual = a != b; // Are not equal
    let isGreater = a > b; // Is the first greater
    let isLess = a < b; // Is the first less

    // Logical operations (using numbers in a logical context)
    let logicalAnd = a > 0 && b > 0; // Both numbers are greater than 0
    let logicalOr = a > 0 || b < 0; // At least one number is greater than 0
    let logicalNot = !(a > 0); // Not greater than 0

    // Output results to the page
    document.getElementById('results').innerHTML = `
        <h3>Arithmetic Operations:</h3>
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Multiplication: ${multiplication}</p>
        <p>Division: ${division}</p>

        <h3>Comparison Operators:</h3>
        <p>${a} == ${b}: ${isEqual}</p>
        <p>${a} != ${b}: ${isNotEqual}</p>
        <p>${a} > ${b}: ${isGreater}</p>
        <p>${a} < ${b}: ${isLess}</p>

        <h3>Logical Operations:</h3>
        <p>${a} > 0 && ${b} > 0: ${logicalAnd}</p>
        <p>${a} > 0 || ${b} < 0: ${logicalOr}</p>
        <p>!(${a} > 0): ${logicalNot}</p>
    `;
}

function changeLanguage(languageUrl) {
    window.location.href = languageUrl;
}
