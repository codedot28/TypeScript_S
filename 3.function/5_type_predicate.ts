// Type Predicate (타입 프리디케이트)

// 어떤 변수가 또는 어떤 반환갑이 특정 타입인지 구분하는 경우가 많은데, 타입을 구분하는 기능만 따로 만들어 놓은 함수가 타입 프리디케이트

function isNumber(input: any): input is number {
  // 무엇이는 입력을 받았을때 숫자인지 확인하고 싶기에 any사용
  // 반환타입 설정 부분에 변수 이름 넣어주고 is를 넣은 후 체크하고 싶은 반환 타입을 넣으면 됨 이게 사용법
  return typeof input === 'number';
}

console.log(isNumber(10)); // true
console.log(isNumber('스트링')); // false


// 이런식으로 받아도 되는데 타입 프리디케이트를 사용하는 이유?
function isNumberRetBool(input:any):boolean {
  return typeof input === 'number'
}

console.log(isNumberRetBool(10)); // true

let number: any = 5;

if(isNumberRetBool(number)){
  number; // type any
}

if(isNumber(number)){
  // let number를 any타입으로 지정했음에도 위에 타입 프리디케이트로 설정한 또는 원하는 타입으로 명확하게 표현해줌
  number; // type number
}

interface Doge {
  name: string;
  age: number;
}

interface Cat{
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
  return (animal as Doge).age !== undefined // Doge인지 아닌지 확인을 위해 캐스팅을 한다.
}

const doge:DogeOrCat = {
  name: '도지',
  age: 33
}

if(isDoge(doge)){
  doge; // type Doge
}else {
  doge; // type never
  // 현재형태는 Cat이 될수 없는 상태이기 때문에 never가 된다.
}