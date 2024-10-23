// Функція з колбеком

function handleNum (num) {
  if (num % 2 === 0) {
    return handleEven();
  } else {
    return handleOdd();
  }
}

function handleEven () {
  console.log("Number is even");
}
function handleOdd () {
  console.log("Number is odd");
}

handleNum(343, handleOdd, handleEven); // Збило те, що це працює і без передачі аргументом колбеків функцій