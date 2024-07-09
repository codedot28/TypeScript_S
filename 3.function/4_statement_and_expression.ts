//Statement and Expression

//statement(문장)
function addTwoNumbers(x: number, y: number){
  return x + y;
}

// expression(표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
}

// 더하기, 빼기, 곱하기, 나누기 이렇게 같은 시그니처를 가지고 있는 함수를 정의한다면
// 문장식으로 표현하면,

//statement
// 더하기
function add(x:number, y: number):number {
  return x + y;
}

// 빼기
function subtract(x:number, y: number):number {
  return x - y;
}

// 곱하기
function multiply(x:number, y: number):number {
  return x * y;
}

// 나누기
function divide(x:number, y: number):number {
  return x / y;
}

// 이런식으로 일일이 다 입력해줘야

// expression
// 함수의 시그니처를 정할 수 있음

type CalculationType = (x:number, y: number) => number;

// 더하기
const add2: CalculationType = function(x, y){
  return x + y;
}

// 빼기
const subtract2: CalculationType =function(x, y){
  return x - y;
}

// 곱하기
const multiply2: CalculationType = function(x, y){
  return x * y;
}

// 나누기
const divide2: CalculationType = function(x, y){
  return x / y;
}