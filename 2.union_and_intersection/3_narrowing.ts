// Narrowing

// 유니언타입에서 더욱 구체적인 타입으로 논리적으로 유추할 수 있게 되는 걸 의미

let numberOrString: number | string = '스트링';
numberOrString;
// 유니언 타입으로 변수에 타입을 지정한 상태에서 값을 '스트링'으로 넣었고 이를 확인해 보면 값이 스트링인걸 확인 할 수 있는데,  선언은 number | string이지만 값이 스트링이기 number가 없는 string타입으로 된다.
// 때문에 정확한 타입 유추가 가능하다.
// 이게 narrowing의 개념이다.

// toFixed

const decimal = 12.3278;
console.log(decimal.toFixed(2)); // 12.33 (소수점 둘째 자리까지 반올림)

// 이 toFixed는 number타입에서만 가능한 메서드인데 이걸 사용하려 하면 
// numberOrString.toFixed(); // 애러가 나게 되는데 narrowing된 값이 스트링이기에 애러가 나는것을 확인 할 수 있음

// Narrowing의 종류
// 1. Assignment Narrowing
// 2. typeof Narrowing
// 3. Truthiness Narrowing
// 4. Equality Narrowing
// 5. in operator Narrowing
// 6. instanceof Narrowing
// 7. discrimated union Narrowing(차별된 유니언 내로잉)
// 8. exhaustiveness checking

// 1.
// 특정값을 할당해서 내로잉하는 형태
let numOrString: number | string = '김';
numOrString.toString()

// 2. 
numOrString = Math.random() > 0.5 ? 123 : '스트링';
// rnadom이라는 매소드는 0~1까지 랜덤하게 숫자를 반환하는데, 조건문으로 0.5보다 적으면 숫자를 그렇지 않으면 스트링을 반환하게끔 하였기에 현재 타입은 number | string이 적용

if(typeof numOrString === 'string'){
  numOrString // string 타입
}else {
  numOrString // number 타입
}

// 3.
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['김', '이'];

if(nullOrString){
  nullOrString //string[]
}else {
  nullOrString // null
}

// 4.
let numOrString2: number | string = Math.random() > 0.5  ? 123 : '김';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '이' : true;

if(numOrString2 === stringOrBool2){
  numOrString2 //string
  stringOrBool2 // string
  // 같은 경우는 즉 true인 상태에서 string이기에
}else {
  numOrString2 // string| number
  stringOrBool2 // string | true
}

// 5.
// 존재여부에 대한 키 값을 in 키워드를 통해 알 수 있음.
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}

let human: Human ={
  name:'김',
  age: 20
}

let dog:Dog = {
  name: '츄',
  type: '말티츄'
}

let humanOrDog : Human | Dog = Math.random() > 0.5 ? human : dog;
console.log('name' in human) // true
console.log('age2' in human) // false
// human안에 name이라는 키값이 있는지 확인하는 방법 -> 존재하면 true
// 현재 존재하기에 true

if('type' in humanOrDog){
  humanOrDog //type이 존재하기에 dog타입으로 나타나고
}else {
  humanOrDog //type이 존재하지 않기에 human타입으로 나타남
}

// 6.
let dateOrString: Date | string = Math.random() > 0.5 ? new Date()  : '김';

if(dateOrString instanceof Date){
  dateOrString //Date 타입
} else {
  dateOrString //string 타입
}

// 7.
interface Animal {
  type: 'dog' | 'human';
  height?: number;
  breed?: string;
}

let animal: Animal = Math.random() > 0.5 ? 
{
  type:'human',
  height: 177,
} : {
  type: 'dog',
  breed: '말티츄'
};

if(animal.type === 'human'){
  animal.height // number | undefined
}else {
  animal.height // number | undefined
  animal.breed // string | undefined
}

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
type: 'dog';
breed: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
{
  type: 'human',
  height: 183
} : {
  type:'dog',
  breed: '말티츄'
}

if(humanOrDog2.type === 'human'){
  humanOrDog2; // Human2 타
}else {
  humanOrDog2; // Dog2 타입
}

// 위와 값은 같으나 타입에 대한 결과는 다른데 공통되는 값을 갖고 있는 프로퍼티를 갖고 있는 객체의 정의를 선언할때 인터페이스로 선언하든 타입으로 선언하든 절대적으로 하나로 만들어서 타입을 지정하지 않고 각각 나누어 유니언 형태로 만들어 선언을 해야한다. 적절한 예시가 두번쨰 예시임

//8.

switch(humanOrDog2.type){
  case 'human':
    humanOrDog2; // Human2 타입
    break;
  case 'dog' :
    humanOrDog2; //Dog2 타입
    break;
    default :
    humanOrDog2 // never 타입
    // 그 어떤것도 될수 없는 타입 type은 human과dog밖에 될 수 없기에 default로 확인하면 never타입이 됨
}