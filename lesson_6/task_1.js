// ---------- Function Declaration ----------------

function squareDecl (width , height) {
    return width * height;
}
console.log(`Result from function declaration - ${squareDecl(5, 15)}`);

// ---------- Function Expression ----------------

const squareExp = function (width , height) {
    return width * height;
}
console.log(`Result from function expression - ${squareExp(5, 15)}`);

// ---------- Arrow Function ----------------

const squareArrow = (width , height) => {
    return width * height;
}
console.log(`Result from arrow function - ${squareArrow(5, 15)}`);