//     You're given a list of string <span>tokens</span> representing a mathematical
//     expression using Reverse Polish Notation. Reverse Polish Notation is a
//     notation where operators come after operands, instead of between them. For
//     example 2 4 + would evaluate to 6.

//   Parenthesis are always implicit in Reverse Polish Notation, meaning an
//   expression is evaluated from left to right. All of the operators for this
//   problem take two operands, which will always be the two values immediately
//   preceding the operator. For example, 18 4 - 7 / would
//   evaluate to ((18 - 4) / 7) or 2.

//     Write a function that takes this list of tokens and returns
//     the result. Your function should support four operators: +,
//     -, *, and / for addition,
//     subtraction, multiplication, and division respectively.

//   Division should always be treated as integer division, rounding towards
//   zero. For example, 3 / 2 evaluates to 1 and
//   -3 / 2 evaluates to -1. You can assume the
//   input will always be valid Reverse Polish Notation, and it will always
//   result in a valid number. Your code should not edit this input list.

let tokens = ["50", "3", "17", "+", "2", "-", "/"];

//Solution 1
//Time O(n) Space O(n)
function reversePolishNotation(tokens) {
  let stack = [];

  for (const token of tokens) {
    console.log(typeof token);
    if (token === "+") {
      let secondNum = Number(stack.pop());
      let firstNum = Number(stack.pop());
      let value = firstNum + secondNum;
      stack.push(value);
    } else if (token === "-") {
      secondNum = Number(stack.pop());
      console.log(secondNum);
      firstNum = Number(stack.pop());
      value = firstNum - secondNum;
      stack.push(value);
    } else if (token === "*") {
      secondNum = Number(stack.pop());
      firstNum = Number(stack.pop());
      value = firstNum * secondNum;
      stack.push(value);
    } else if (token === "/") {
      secondNum = Number(stack.pop());
      firstNum = Number(stack.pop());
      value = Math.trunc(firstNum / secondNum);
      stack.push(value);
    } else {
      stack.push(token);
    }
  }
  return Number(stack[0]);
}

reversePolishNotation(tokens);

//Solution 2
function reversePolishNotation(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      const firstNum = stack.pop();
      stack.push(stack.pop() - firstNum);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      const firstNum = stack.pop();
      stack.push(Math.trunc(stack.pop() / firstNum));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
}
