// Переробив на return

function checkOrder (available, ordered) {
  if (ordered > available) {
    return "Your order is too large, we don’t have enough goods.";
  }
  if (ordered === 0) {
    return "Your order is empty";
  }
  return "Your order is accepted";
}

console.log(checkOrder(1, 2));