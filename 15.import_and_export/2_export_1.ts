// export

export class IdolModel {
  name: string;
  age:number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}

export const k = new IdolModel('k', 33);

export const number = 9999;

export interface ICat {
  name: string;
  age:number;
}

// export default가 아닌 export만 할 경우 다중으로 가능하다.

export default{
  name:'코드닷',
  age: 33
}