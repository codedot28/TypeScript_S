// Property Initialization

// 일반적인 필수값 선언법
class Person{
  name: string;
  age: number = 33; // 초기값 제공 선언법
  pet?:string; // optional 값 선언법 (값을 넣어도, 넣지 않아도 됨) 
  petAge: number | undefined; // type of undefined 선언법
  
  constructor(name:string){
    this.name = name
  }
}

class RoutStack {
  stack!:string [];

  constructor(){
    this.initialize();
  }

  initialize(){
    this.stack = [];
  }
}
// initialize안에서 초기화를 시키고 이를 constructor에서 선언했는데 이를 ts가 알수 없으니 `!`느낌표를 사용한다.
// ts 초기화가 된다는 걸 알려주기 위해서 `!`느낌표를 사용하여 알려주면 사용이 가능해 진다.

const routeStack = new RoutStack();
console.log(routeStack) // RoutStack { stack: [] }