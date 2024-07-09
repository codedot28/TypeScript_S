// Function type

type Mapper = (x:string) => string;

const runner = (callback: Mapper) => {
  return ['김', '이', '츄'].map(
   callback,
  )
}

console.log(runner( (x) => `가족 : ${x}`))

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
}

// Interface로 함수 선언

interface IMultiplyTwoNumber{
  (x: number, y: number): number;
}

const multiplyTwoNumbers2: IMultiplyTwoNumber = (x, y) => {
  return x + y;
}