// Export

// export default class Idol {
//   name: string;
//   age:number;

//   constructor(name:string, age:number){
//     this.name = name;
//     this.age = age;
//   }
// }

// expor default는 파일당 한개만 존재 가능

// const number = 12

// export default number


// 타입 export

// export default interface ICat{
//   name: string;
//   breed: string;
// }


// 여러개를 export하고 싶으면

class Idol {
    name: string;
    age:number;
  
    constructor(name:string, age:number){
      this.name = name;
      this.age = age;
    }
  }

  const number = 12

  export default{
    Idol,
    number
  }