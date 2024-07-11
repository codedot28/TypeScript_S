// Unknown Type

// any타입과 비슷하나 unknown이 약간 덜 관대한 타입

//any
// 어떤 타입이든 다 가능하다. 관대함

let anyValue: any;

anyValue = 20;
anyValue = '김';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

// 모두 가능!

let unknownValue: unknown;

unknownValue = 20;
unknownValue = '김';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// unknown도 가능
// 하지만 할당에서 차이가 있음

// let anyType: any = anyValue;
// let unknownType : unknown = anyValue;
// let booleanType : boolean = anyValue;
// let arrayType : string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// any 타입은 어떠한 것이든 할당이 가능하지만

let anyType: any = unknownValue;
let unknownType : unknown = unknownValue;
// let booleanType : boolean = unknownValue; //error
// let arrayType : string[] = unknownValue; // error
// let objectType: {} = unknownValue; //error
// let nullType: null = unknownValue; //error
// let undefinedType: undefined = unknownValue; //error

// any, unknown을 제외하면 그 어떠한것도 할당이 불가능함
// 변수 값에서 또 다른 변수로 값을 옮겨서 할당 할 때는 차이가 있음

// anyValue.toUpperCase() // 에러가 나진 않음
// anyValue.name

// unknownValue.toUpperCase() // error
// new unknownValue() //error

// unkonwn은 이렇게 알지 못하는, 실행할 수 있는지 못하지를 알지 못하는 값대로 우리가 구현할 수가 없다.

function isString(target:unknown) : target is string {
  return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
  testVal;
}

// UnionType
// 유니언 타입으로 하게되면 unknown이 흡수를 하는데 any타입만은 예외이다.

type uOrstring = unknown | string; // type unknown
type uOrBoolean = unknown | boolean; // type unknown
type uOrNumber = unknown | number; // type unknown
type uOrany = unknown | any; // type any
type anyOrU = any | unknown; // type any

//intersection

type uAndstring = unknown & string; // type string
type uAndBoolean = unknown & boolean; // type boolean
type uAndNumber = unknown & number; // type number
type uAndany = unknown & any; // type any
type anyAndU = any & unknown; // type any

// Operator 사용

let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2 //error
// number1 - number2 //error
// number1 * number2 //error
// number1 / number2 //error

number1 === number2
number1 == number2
number1 !== number2
number1 != number2
