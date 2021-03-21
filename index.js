const a = 10;
const b = 20;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment (a){
    a += 1;
    return a;
}

function decrement (a){
    a -= 1;
    return a;
}

function makeInt(string) {
    return parseInt(string, 10)
  }
  
  function preserveDecimal(string) {
    return parseFloat(string)
  }
  