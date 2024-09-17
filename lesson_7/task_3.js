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

// Кейс 1. число / стрінг
try {
    const result = divide(5, "test_string");
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done!");
}

// Кейс 2. число / число
try {
    const result = divide(5, 5);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done!");
}

// Кейс 3. число / нуль
try {
    const result = divide(23, 0);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done!");
}

// Кейс 4. стрінг / нуль
try {
    const result = divide("two errors", 0);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work is done!");
}


