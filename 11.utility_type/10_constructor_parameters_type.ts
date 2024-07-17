// ConstructorParameters Type

class Idol {
  name: string;
  age: number;

  constructor(naem: string, age: number){
    this.name = naem,
    this.age = age
  }
}

type constructorParameters = ConstructorParameters<typeof Idol>;
// type constructorParameters = [naem: string, age: number]
