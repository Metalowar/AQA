// Сама функція, яка описує поведінку, як діяти у всіх випадках при діленні

function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Divide imposible, denominator is zero");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Divide imposible, one of the values is NaN");
    }
    return numerator / denominator;
}

// Функція для кейсів
function tryCatchFinally (numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log(result);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Work is done!");
    }
}

// Кейс 1. число / стрінг
tryCatchFinally(3, "test string");

// Кейс 2. число / число
tryCatchFinally(3, 5);

// Кейс 3. число / нуль
tryCatchFinally(23, 0);

// Кейс 4. стрінг / нуль
tryCatchFinally('Aaaa', 0);


