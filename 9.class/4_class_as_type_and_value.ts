// class as type and value

// TS의 클래스는 타입이 될수도 있고 값이 될 수도 있다.

class Dog {
  name: string;

  constructor(naem: string){
    this.name = naem;
  }

  bark(){
    return `${this.name}가 짖습니다.`
  }
}

let ori = new Dog('오리');
console.log(ori.bark()); // 오리가 짖습니다.  ori의 타입은 Dog타입

// ori = '오리' // error Dog타입이 아니기 때문에 바꿀수 없다.

// 객체로는 바꿀 수 있다.
ori = {
  name:'츄',
  bark(){
    return `${this.name}가 짖습니다.`;
  }
}

console.log(ori.bark()) // 츄가 짖습니다.
