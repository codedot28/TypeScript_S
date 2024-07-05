// Uinon Basics

// 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '스트링';
stringOrBooleanType = true;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; // 존재하지 않는 값이므로 애러 발생.



// 리스트의 유니언

// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = [
  '김',
  '나',
  '박',
];

stringListOrBooleanList =[
  true,
  false,
  true,
  false
]

// 애러 발생 
// stringListOrBooleanList = [
//   false,
//   '스트링'
// ]

// 위에 리스트가 되게 하려면

type StringOrNumberList = (string | number)[];

let stringOrNumberList: StringOrNumberList = [
  1,2,3,
  '스트링',
  '스트링2',
]

// Interface로 사용하는 union

interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: '김',
  age: 33,
  address:'서울'
}

console.log(animalOrHuman);
//출력값: { name: '김', age: 33, address: '서울' }
// 마우스를 올려보면 Human타입으로 나오게 되는데 address가 있기때문에 Human타입으로 설정됨.

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address); // 문제없이 잘 나옴

animalOrHuman = {
  name: '츄',
  age: 2,
}
console.log(animalOrHuman);
//출력값: { name: '츄', age: 2 }
// 타입은 Animal로 나오게됨 address가 빠졌기 때문에

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
//  console.log(animalOrHuman.address); // 애러가 나타나는데 타입이 Animal이기에 address는 존재하지 않는다.



// 타입을 지정하지 않고 직접적으로 하는 경우

let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '김',
    age: 33,
    address: '서울'
};

console.log(animalOrHuman2.address); // 서울; string
console.log(animalOrHuman2.name);    // 김;   string
console.log(animalOrHuman2.age);     // 33;   number

animalOrHuman2 = {
  name: '츄',
  age: 2
}

// console.log(animalOrHuman2.address); // 애러발생
console.log(animalOrHuman2.name);    // 츄;   string
console.log(animalOrHuman2.age);     // 2;    number


// 서로 완전히 관계없는 유니언을 선언하는 경우
type Person = {
  name: string;
  age: number;
}

type Dog = {
  breed: string;
  country: string;
}

type PersonOrDog = Person | Dog;

const personOrDog: PersonOrDog = {
    name: '김',
    age:33,
    breed: 'Malti-Tzu',
    country: '미국',
}

// 유니언은 합집합의 개념으로 보면 된다. 위 처럼 선언한 모든게 들어오도 문제 없이 된다.

const personOrDog2: PersonOrDog = {
  name: '김',
  age:33,
  // breed: 'Malti-Tzu',
  // country: '미국',
}

// 이것도 가능하고

const personOrDog3: PersonOrDog = {
  // name: '김',
  // age:33,
  breed: 'Malti-Tzu',
  country: '미국',
}

//  이것도 가능하나

// const personOrDog4: PersonOrDog = {
//   name: '김',
//   // age:33,
//   breed: 'Malti-Tzu',
//   // country: '미국',
// }

// 이건 문제가 person도 될수 없고 Dog도 될수 없기때문에 애러가 발생하게 된다.
// 타입의 충족 즉 하나라도 타입이 충족되었을 경우는 문제가 되지 않지만 두 개의 타입에서 어느하나 충족되지 않으면 문제가 된다.