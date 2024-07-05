// Type Inference
// 타입 추론
// 타입을 입력하지 않더라도 타입스크립트에서 자체적으로 변수나 함수 파라미터의 값들을 직접 유추

let stringType = 'string';
let booleanType = true;
let numberType = 20;

booleanType = false;
// 타입지정을 하지 않아도 변수명에 마우스를 올리면 TS가 타입을 추론해서 타입을 지정해 준다.




const constStringType = 'const string';
const constBooleanType = true;

// const로 넣게되면 타입을 좀 더 구체적타입으로 추론이 된다.

let yuJin = {
  name: '안유진',
  age: 2003
}

const yuJin2 = {
  name: '안유진',
  age: 2003
}

yuJin2.name = '이영지';
console.log(yuJin2); // { name: '이영지', age: 2003 }

// const로 선언을 했지만 구체화된 타입이 되지 않아 name이 변경되는 현상 발생


const yuJin3 = {
  name: '안유진' as const,
  age: 2003 as const
}

// 캐스팅을 as const를 사용하여 구체적인 타입 지정이 가능해진다.


// Array
let numbers = [1,2,3,4,5,]; //마우스를 올려보면 number[] 추론되어 있다.
let numbersAndString = [1,2,3,'4','5','6']; // (string | number)[] 추론됨

numbers.push(6) // 잘 들어감
// numbers.push('6') // 스트링 값이기에 애러남

const nos2 = numbersAndString[100]; //string | number로 나오며 존재하지 않는 값이지만 에러 발생을 하지 않음

// tuple
const twoNumbers = [1,3] as const; // [1 ,3]이라는 구체적인 타입지정이 됨

const first = twoNumbers[0] // 1이 출력됨
// const first2 = twoNumbers[3] // 애러발생 [1, 3]이 외에 존재하지 않으므로 구체적인 타입이 지정되었기에 애러가 발생됨 Array와의 차이점
