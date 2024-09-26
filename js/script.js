/*const userAgent = navigator.userAgent;
document.write("Ваш браузер: " + userAgent);*/

function calculate() {
    // Отримуємо значення з полів введення
    let a = parseFloat(document.getElementById('num1').value); // Перше число
    let b = parseFloat(document.getElementById('num2').value); // Друге число

    // Арифметичні операції
    let sum = a + b; // Додавання
    let difference = a - b; // Віднімання
    let multiplication = a * b; // Множення
    let division = a / b; // Ділення

    // Оператори порівняння
    let isEqual = a == b; // Чи рівні
    let isNotEqual = a != b; // Чи не рівні
    let isGreater = a > b; // Чи перше більше
    let isLess = a < b; // Чи перше менше

    // Логічні операції (використання чисел у логічному контексті)
    let logicalAnd = a > 0 && b > 0; // Обидва числа більше 0
    let logicalOr = a > 0 || b < 0; // Хоча б одне число більше 0
    let logicalNot = !(a > 0); // Не більше 0

    // Вивід результатів на сторінку
    document.getElementById('results').innerHTML = `
        <h3>Арифметичні операції:</h3>
        <p>Сума: ${sum}</p>
        <p>Різниця: ${difference}</p>
        <p>Множення: ${multiplication}</p>
        <p>Ділення: ${division}</p>

        <h3>Оператори порівняння:</h3>
        <p>${a} == ${b}: ${isEqual}</p>
        <p>${a} != ${b}: ${isNotEqual}</p>
        <p>${a} > ${b}: ${isGreater}</p>
        <p>${a} < ${b}: ${isLess}</p>

        <h3>Логічні операції:</h3>
        <p>${a} > 0 && ${b} > 0: ${logicalAnd}</p>
        <p>${a} > 0 || ${b} < 0: ${logicalOr}</p>
        <p>!(${a} > 0): ${logicalNot}</p>
    `;
}

function changeLanguage(languageUrl) {
    window.location.href = languageUrl;
  }