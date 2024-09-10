// Прибрав return з блоків коду, оскільки IDE сварилася на це. В мене вони заміняються на console.log

function checkOrder (available, ordered) {
    if (ordered > available) {
        console.log("Your order is too large, we don’t have enough goods.");
    } else if (ordered === 0) {
        console.log("Your order is empty");
    } else {
        console.log("Your order is accepted");
    }
}

checkOrder(100, 99);