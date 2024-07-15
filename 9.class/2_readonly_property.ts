// Readonly 속성

class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age:number){
    this.name = name;
    this.age = age
  }
}

const k = new Idol('김', 33);

k.age = 32;
k.name;
// k.name = '이';  // error