// Interface Implementation

// OOP 객체 지향 프로그래밍 관점에서의 interface
// interface는 어떤 클래스가 어떤 시그니처를 강제할 수 있게 해주는 게 인터페이스의 기능

interface Animal {
  name: string;
  age: number;
  jump():string;
}

// inplements를 하려면 class안에 위쪽에 선언한 interface의 요소들을 똑같이 정의 돼 있어야함
class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  jump(): string {
      return `${this.name}이 점프를 합니다.`;
  }

  // 초과는 가능하지만, 미달은 불가하다.
  dance(){

  }

  // 이런식으로 메서드를 추가하는 것은 가능
}

let ori:any = new Dog('오리', 3);
console.log(ori); // Dog { name: '오리', age: 3 }


function instanceOfAnimal(object: any): object is Animal{
  return 'jump' in object;
  // 객체에서 어떤 키가 있는지 체크하는데 in 키워드 사용
}

if(instanceOfAnimal(ori)){
  ori; //type Animal
}


// 다중 인터페이스 구현

interface Pet{
  legsCount: number;
  bark():void;
}

class Cat implements Animal, Pet {
  //Animal
  name: string;
  age: number;

  //Pet
  legsCount: number;

  constructor(name:string, age:number, legsCount:number){
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Animal
  jump(): string {
      return `${this.name}이 점프를 합니다.`;
  }

  // Cat
  bark(): void {
      console.log('냐옹');
  }
}

// 타입 implements
type AnimalAndPet = Animal & Cat;

class Cat2 implements AnimalAndPet {
    //Animal
    name: string;
    age: number;
  
    //Pet
    legsCount: number;
  
    constructor(name:string, age:number, legsCount:number){
      this.name = name;
      this.age = age;
      this.legsCount = legsCount;
    }
  
    // Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }
  
    // Cat
    bark(): void {
        console.log('냐옹');
    }
}

// 안되는 상황
interface WrongInterface1{
  name: string;
}
interface WrongInterface2{
  name: number;
}

// class Person implements WrongInterface1, WrongInterface2{
//   // name:string; // error
//   // name:number; // error

//   // name: string | number // error
// }

// 이런식으로 error가 나오는 상황이 있는데 implements를 할때는 interface의 프로퍼티가 중복되는게 없는지 꼭 확인하고 해야함

/**  컨스트럭트가 있는 정의를 인터페이로 하는 방법*/

class Idol {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
// 이런식으로 constructor의 형태를 갖고 있는 클래스를 타입화 하고 싶을때

interface IdolConstructor{
  new(name:string, age: number): Idol
}
// new키워드를 넣어 선언한다.

function createIdol(constructor: IdolConstructor, name: string, age:number){
  return new constructor(name, age);
  // 사실상
  // return new Idol(name, age)
  // 이거랑 같음
}

createIdol(Idol, '김', 33)
console.log(createIdol(Idol, '김', 33)); //Idol { name: '김', age: 33 }
