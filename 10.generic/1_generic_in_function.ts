//Generic in Function (함수에서 제너릭 사용하기)

function whatValue(value: any) {
  return value;
}

const value = whatValue('test');

// 아직 존재하지 않는 아직 잘 모르겠는 타입을 선언할 때 사용

function genericWhatValue<T>(value:T):T{
  return value;
}

// 후에 타입이 정해지면 이런식으로 타입을 지정하게 되는데, 위에 T는 string타입이 된다.
const genericResult1 = genericWhatValue<number>(123) // type number

let genericResult2 = genericWhatValue('스트링') //type string
// 제네릭을 넣지 않고도 저런식으로 '스트링'값을 넣어줘도 타입이 유추된다.

// ---------

function multipleGenerics<X, Y, Z>(x:X, y:Y, z:Z){
  return{
    x,
    y,
    z
  }
}

const multipleGenericsResult = multipleGenerics<number, boolean, string>(123,false,'123');
// 순서가 변경되면 에러가 난다, 순서를 지켜야함.
const multipleGenericsResult2 = multipleGenerics(123,false,'123');
// 제너릭 선언을 지워도 타입 유추 가능


/**
 * 튜플 반환
 */

function getTuple<X, Y>(val1:X, val2:Y){
  return [val1, val2] as const;
}

const tuple = getTuple(true, 100) // const tuple: readonly [boolean, number]

/**
 * class에 constructor 제네릭 선언
 */

class Idol {
  name: string;
  age: number
  constructor(name:string, age:number){
    this.name = name;
    this.age =age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand:string, codeName:string){
    this.brand = brand;
    this.codeName = codeName;
  }
}


function instantiator<T extends {new(...args:any[]): {}}>(constructor: T, ...args:any){
  return new constructor(...args)
}
console.log(instantiator(Idol, '김', 33));
console.log(instantiator(Car, '롤스로이스', 2323));