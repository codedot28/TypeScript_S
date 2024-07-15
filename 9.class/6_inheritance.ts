// Inheritance(상속)

class Parent{
  name:String;

  constructor(name:string){
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤을 춥니다.`); 
  }
}

class Child extends Parent {
  age: number;
  
  constructor(name:string, age: number){
    super(name);

    this.age =age;
  }

  sing(){
    console.log(`child: ${this.name}가 노래를 부릅니다.`)
  }
}

const k = new Parent('김');
const chue = new Child('츄', 2);

k.dance(); //parent: 김이 춤을 춥니다.

chue.dance(); //parent: 츄이 춤을 춥니다.
chue.sing(); //child: 츄이 노래를 부릅니다.

let person:Parent;
person = k;
person = chue;
//  자식은 부모타입이 될 수 있지만

let person2:Child;
person2 = chue
// person2 = k // error
// 부모는 자식타입이 될 수 없으므로 error

// TS만 되는 요소
// OOP의 개념 자체가 아닌 구조적 타이핑을 하여 구조가 비슷하면 같은 타입이라고 보기 때문에 되는 요소가 존재
// optional 프로퍼티를 유의하자

class Parent2 {
  name: string;

  constructor(name: string){
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?:number;

  constructor(name: string, age?:number){
    super(name);
    this.age = age;
  }
}

const k2 = new Parent2('김2');
const chue2 = new Child2('츄', 2);

let child2:Child2;
child2 = chue2;
child2 = k2; // 위에서는 이렇게 넣는게 불가했는데 지금은 가능, age가 ?옵셔널이기 때문에 가능