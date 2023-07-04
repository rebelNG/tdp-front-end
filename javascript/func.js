function myName(name) {
    console.log(`hi, my name is ${name}`);
}

myName('Emmanuel');

function add(a,b) {
    return a + b
}
function sub(a,b) {
    return a-b
}
function mult(a,b) {
    return a*b
}
function div(a,b) {
    return a/b
}

let result = add(10,20)
let result1 = sub(result, 5)
let result2 = mult((result+result1),10)
let result3 = div((result + result2 * result1),(result +10))

let results = [result,result1,result2,result3]
console.log(results.join(','));

function member(a,b,c) {
    return `${a}/${b} is a ${c} operation`
}

let operation = member(3,4,'Division')
console.log(operation);


function fibonacci(z) {
    if (z === 0) {
      return 0;
    } else if (z === 1) {
      return 1;
    } else {
      let previousNumber = 0;
      let currentNumber = 1;
  
      for (let i = 2; i <= z; i++) {
        let nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
      }
  
      return currentNumber;
    }
  }

  console.log(fibonacci(6));