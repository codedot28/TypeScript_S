// Generic in Methods

class Idol<T>{
  id:T;
  name: string;

  constructor(id:T, name:string){
    this.id = id;
    this.name = name;
  }

  sayHello<Time>(logTime:Time){
    return `[${logTime}] 안녕하세요. 제 이름은 ${this.name}이고 ID는 ${this.id}입니다.`;
  }
}

const chue = new Idol('a999', '츄');  

console.log(chue.sayHello('2024')); // [2024] 안녕하세요. 제 이름은 츄이고 ID는 a999입니다. sayHello<string>(logTime: string): string
console.log(chue.sayHello(1999)); // [1999] 안녕하세요. 제 이름은 츄이고 ID는 a999입니다. sayHello<number>(logTime: number): string

class Message<T>{
  sayHello<Time>(logTime:Time, message:T){
    console.log(`logTime: ${typeof logTime} / message: ${typeof message}`); //logTime: number / message: string
  }
}

const message = new Message<string>();
message.sayHello<number>(2000, '하이!');

class DuplicatedGenericName<T>{
  sayHello<T>(logTime:T){
    console.log(`logTime: ${typeof logTime}`);
  }
}

const duplicate = new DuplicatedGenericName<string>();

duplicate.sayHello<number>(123);